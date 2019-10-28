import { Auth } from '../../features/login/models/auth';

export interface AuthState{
    user: Auth,
    loading: boolean,
    error: string,
}

