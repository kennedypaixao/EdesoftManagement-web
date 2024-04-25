/* eslint-disable @typescript-eslint/no-explicit-any */
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import _ from '@lodash';
// import { AxiosError } from 'axios';
import { useAuth } from 'src/app/auth/AuthRouteProvider';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { AuthService } from '../../auth/services/auth/authService';

/**
 * Form Validation Schema
 */
const schema = z.object({
	email: z.string().email('Você precisa informar um e-mail válido.').nonempty('Você precisa informar um e-mail'),
	password: z
		.string()
		.min(4, 'Senha muito curta - precisa ter pelo menos 4 caracteres.')
		.nonempty('Por favor informe sua senha.')
});

type FormType = {
	email: string;
	password: string;
	remember?: boolean;
};

const defaultValues = {
	email: '',
	password: '',
	remember: true
};

function SignInForm() {
	const { jwtService } = useAuth();

	const { control, formState, handleSubmit, setValue, setError } = useForm<FormType>({
		mode: 'onChange',
		defaultValues,
		resolver: zodResolver(schema)
	});

	const { isValid, dirtyFields, errors } = formState;

	useEffect(() => {
		setValue('email', '', { shouldDirty: true, shouldValidate: false });
		setValue('password', '', { shouldDirty: true, shouldValidate: false });
	}, [setValue]);

	function onSubmit(formData: FormType) {
		const { email, password } = formData;

		const auth = new AuthService();
		auth.Auth(email, password).then((success: any) => {
			console.log(success);
		});

		// jwtService
		// 	.signIn({
		// 		email,
		// 		password
		// 	})
		// 	.catch(
		// 		(
		// 			error: AxiosError<
		// 				{
		// 					type: 'email' | 'password' | 'remember' | `root.${string}` | 'root';
		// 					message: string;
		// 				}[]
		// 			>
		// 		) => {
		// 			const errorData = error.response.data;

		// 			errorData.forEach((err) => {
		// 				setError(err.type, {
		// 					type: 'manual',
		// 					message: err.message
		// 				});
		// 			});
		// 		}
		// 	);
	}

	return (
		<div className="w-full">
			<form
				name="loginForm"
				noValidate
				className="mt-32 flex w-full flex-col justify-center"
				onSubmit={handleSubmit(onSubmit)}
			>
				<Controller
					name="email"
					control={control}
					render={({ field }) => (
						<TextField
							{...field}
							className="mb-24"
							label="E-mail"
							autoFocus
							type="email"
							error={!!errors.email}
							helperText={errors?.email?.message}
							variant="outlined"
							required
							fullWidth
						/>
					)}
				/>

				<Controller
					name="password"
					control={control}
					render={({ field }) => (
						<TextField
							{...field}
							className="mb-24"
							label="Senha"
							type="password"
							error={!!errors.password}
							helperText={errors?.password?.message}
							variant="outlined"
							required
							fullWidth
						/>
					)}
				/>
				{/* 
				<div className="flex flex-col items-center justify-center sm:flex-row sm:justify-between">
					<Controller
						name="remember"
						control={control}
						render={({ field }) => (
							<FormControl>
								<FormControlLabel
									label="Remember me"
									control={
										<Checkbox
											size="small"
											{...field}
										/>
									}
								/>
							</FormControl>
						)}
					/>

					<Link
						className="text-md font-medium"
						to="/pages/auth/forgot-password"
					>
						Forgot password?
					</Link>
				</div> */}

				<Button
					variant="contained"
					color="secondary"
					className=" mt-16 w-full"
					aria-label="Sign in"
					disabled={_.isEmpty(dirtyFields) || !isValid}
					type="submit"
					size="large"
				>
					ACESSAR
				</Button>
			</form>
		</div>
	);
}

export default SignInForm;
