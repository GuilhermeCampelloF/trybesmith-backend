export default function mapStatusHTTP(status: string): number {
  const mapStatus: Record<string, number> = {
    INVALID_VALUE: 422,
    UNAUTHORIZED: 401,
    NOT_FOUND: 404,
    BAD_REQUEST: 400,
  };
  return mapStatus[status] ?? 500;
}