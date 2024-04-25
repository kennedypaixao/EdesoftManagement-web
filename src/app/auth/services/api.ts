/* eslint-disable no-lonely-if */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-async-promise-executor */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import axios, { AxiosInstance } from 'axios';
// import { useContextApi } from '../../context/ContextApi';

abstract class Api {
	public static _getRequestInstance = (token?: string): AxiosInstance =>
		axios.create({
			baseURL: import.meta.env.BASE_URL,
			timeout: 5000,
			responseType: 'json',
			headers: { authorization: `Bearer ${token}` }
		});

	public static GetAsync<T>(url: string, token?: string, data?: any): Promise<T> {
		return new Promise<T>(async (resolve, reject) => {
			try {
				const axiosInstance = this._getRequestInstance(token);
				const response = await axiosInstance.get(url, data);
				resolve(response.data);
			} catch (error: any) {
				// const ApiContext = useContextApi();

				if (error.response && error.response.status === 401) {
					// Tratar o erro 401 aqui
					// ApiContext._setNotAuthorized(true);
					console.error('Erro 401: Não autorizado');
					// Você pode exibir uma mensagem ou fazer o que for necessário aqui
				} else {
					reject(error);
				}
			}
		});
	}

	public static PostAsync(url: string, data?: any, token?: string): Promise<any> {
		return new Promise(async (resolve, reject) => {
			try {
				const axiosInstance = this._getRequestInstance(token);
				const response = await axiosInstance.post(url, data);

				resolve(response.data);
			} catch (error) {
				if (error.response && error.response.status === 418) {
					// Faça algo específico para o status 418
					resolve('error');
				} else {
					// Faça algo para outros erros
					// const ApiContext = useContextApi();

					if (error.response && error.response.status === 401) {
						// Tratar o erro 401 aqui
						// ApiContext._setNotAuthorized(true);
						console.error('Erro 401: Não autorizado');
						// Você pode exibir uma mensagem ou fazer o que for necessário aqui
					} else {
						resolve(error);
					}
				}
			}
		});
	}

	public static PutAsync(url: string, data?: any, token?: string): Promise<any> {
		return new Promise(async (resolve, reject) => {
			try {
				const axiosInstance = this._getRequestInstance(token);
				const response = await axiosInstance.put(url, data);

				resolve(response.data);
			} catch (error) {
				// const ApiContext = useContextApi();

				if (error.response && error.response.status === 401) {
					// Tratar o erro 401 aqui
					// ApiContext._setNotAuthorized(true);
					console.error('Erro 401: Não autorizado');
					// Você pode exibir uma mensagem ou fazer o que for necessário aqui
				} else {
					resolve(error);
				}
			}
		});
	}
}

export default Api;
