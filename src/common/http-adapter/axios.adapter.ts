import { BadGatewayException, Injectable } from "@nestjs/common";
import axios, { AxiosInstance } from "axios";


@Injectable()
export class AxiosAdapter {
    private readonly axios: AxiosInstance = axios;

    async get<T>(url: string): Promise<T> {
        try {
            const { data } = await this.axios.get<T>(url);
            return data;
            
        } catch (error) {
            throw new BadGatewayException('Error en la petición a la Api a " ' + url + '". ', error);
        }
    }

}