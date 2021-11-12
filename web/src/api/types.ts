export interface QueryResult<T> {
	data: T;
	ok: boolean;
	status: number;
}
