import { API_BASE_PATH } from '@/config/constants';
import { io } from 'socket.io-client';

export const socket = io(API_BASE_PATH);