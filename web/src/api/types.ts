import type { Fetch, Parameters } from '@lib/sanity';

interface QueryResult<T> {
	data: T;
	ok: boolean;
	status: number;
}

export type SanityDataFetcher<T> = (
	fetch: Fetch,
	parameters?: Parameters
) => Promise<QueryResult<T>>;
