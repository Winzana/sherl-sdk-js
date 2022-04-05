import { ICategoryNew, ICategoryUpdate } from '../types';
import { endpoints } from './endpoints';
import { Fetcher } from '../../common/api';
import { errorFactory } from '../errors';
import { StringUtils } from '../../common/utils/string';
import { v4 as uuidv4 } from 'uuid';
const fetcher = new Fetcher(errorFactory);

class CategoryApi {
  /**
   * Post add new category.
   *
   * @static
   * @memberof CategoryApi
   */
  public static postCategoryNew = (data: ICategoryNew) =>
    fetcher.post<ICategoryNew>(endpoints.POST_CATEGORY_NEW, {
      ...data,
      id: uuidv4(),
    });

  /**
   * Post add new sub category.
   *
   * @static
   * @memberof CategoryApi
   */
  public static postSubCategoryNew = (data: ICategoryNew, id: string) =>
    fetcher.post<ICategoryNew>(
      StringUtils.bindContext(endpoints.POST_NEW_SUB_CATEGORY, { id }),
      {
        ...data,
        id: uuidv4(),
      },
    );

  /**
   * Put update category.
   *
   * @static
   * @memberof CategoryApi
   */
  public static putCategory = (data: ICategoryUpdate, id: string) =>
    fetcher.put<ICategoryUpdate>(
      StringUtils.bindContext(endpoints.PUT_CATEGORY, { id }),
      data,
    );

  /**
   * Get categories.
   *
   * @static
   * @memberof CategoryApi
   */
  public static getProductionCategories = (id: string) =>
    fetcher.get<ICategoryNew>(
      StringUtils.bindContext(endpoints.GET__CATEGORIS, { id }),
    );

  /**
   * Get public categories.
   *
   * @static
   * @memberof CategoryApi
   */
  public static getPublicCategories = () =>
    fetcher.get<ICategoryNew>(endpoints.GET_PUBLIC_CATEGORIES);

  /**
   * Get all categories and sub categories.
   *
   * @static
   * @memberof CategoryApi
   */
  public static getMainAndSubCategories = (id: string) =>
    fetcher.get<ICategoryNew>(
      StringUtils.bindContext(endpoints.GET_MAIN_AND_SUB_CATEGORIES, { id }),
    );

  /**
   * Delete category.
   *
   * @static
   * @memberof CategoryApi
   */
  public static deleteCategory = (id: string) =>
    fetcher.delete<ICategoryNew>(
      StringUtils.bindContext(endpoints.DELETE_CATEGORY, { id }),
    );
}

export { CategoryApi };
