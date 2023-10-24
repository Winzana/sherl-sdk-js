import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';

interface IGeneratorSummaryResponse {
  name: string;
}
export const generateOrderSummary = async (
  fetcher: Fetcher,
  name: string,
): Promise<IGeneratorSummaryResponse> => {
  const response = await fetcher.post<IGeneratorSummaryResponse>(
    endpoints.GENERATE_ORDER_SUMMARY,
    {
      name,
    });

  if (response.status !== 200) {
    throw new Error(
      `Failed to generate order summary API (status: ${response.status})`,
    );
  }

  return response.data;
};
