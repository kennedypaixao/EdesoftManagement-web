import Api from '../api';
/* eslint-disable class-methods-use-this */
export class AuthService {
	async Auth(email: string, password: string): Promise<string> {
		const a = await Api.GetAsync('');
		console.log(a);
		return '';
	}
}
