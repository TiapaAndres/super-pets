export declare class AxiosAdapter {
    private readonly axios;
    get<T>(url: string): Promise<T>;
}
