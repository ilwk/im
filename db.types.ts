export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

export interface Database {
  public: {
    Tables: {
      messages: {
        Row: {
          id: number;
          data: Json | null;
          username: string;
          room: string;
          timestamp: string;
        };
        Insert: {
          id?: number;
          data?: Json | null;
          username: string;
          room: string;
          timestamp?: string;
        };
        Update: {
          id?: number;
          data?: Json | null;
          username?: string;
          room?: string;
          timestamp?: string;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
  };
}

