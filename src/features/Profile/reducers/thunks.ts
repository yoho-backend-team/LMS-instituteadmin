/* eslint-disable @typescript-eslint/no-explicit-any */
import { StoreLocalStorage } from '@/utils/helper';
import { getAdminProfile } from '../services';
import { getProfile } from './ProfileSlice';

export const getAdminProfileThunk =
	() => async (dispatch: any) => {
		try {
			const response = await getAdminProfile();
			dispatch(getProfile(response?.data));
			StoreLocalStorage('instituteId', response?.data?.uuid)
			console.log(response.data, "check prof")
		} catch (error) {
			console.log(error);
		}
	};
