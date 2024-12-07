import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { loadUser, setAuthToken } from '../../utils/auth';

interface User {
  id: string;
  username: string;
  email: string;
  role: string;
}

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

// Try to get initial state from localStorage
const token = localStorage.getItem('token');
const user = localStorage.getItem('user');

const initialState: AuthState = {
  user: user ? JSON.parse(user) : null,
  token: token,
  isAuthenticated: !!token,
  loading: !!token, // Only start loading if we have a token
  error: null,
};

// Async thunk for loading user
export const loadUserAsync = createAsyncThunk(
  'auth/loadUser',
  async (_, { rejectWithValue }) => {
    try {
      const data = await loadUser();
      return data;
    } catch (error: any) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      return rejectWithValue(error.response?.data?.message || 'Failed to load user');
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (
      state,
      action: PayloadAction<{ user: User; token: string }>
    ) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
      state.isAuthenticated = true;
      state.loading = false;
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      setAuthToken(token);
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.loading = false;
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      setAuthToken(null);
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadUserAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(loadUserAsync.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.loading = false;
        localStorage.setItem('user', JSON.stringify(action.payload.user));
      })
      .addCase(loadUserAsync.rejected, (state, action) => {
        state.isAuthenticated = false;
        state.user = null;
        state.token = null;
        state.loading = false;
        state.error = action.payload as string;
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setAuthToken(null);
      });
  },
});

export const { setCredentials, logout, setError, clearError } = authSlice.actions;
export default authSlice.reducer;
