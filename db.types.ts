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
          created_at: string;
          username: string;
          room: string;
          content: Json | null;
          type: string | null;
        };
        Insert: {
          id?: number;
          created_at?: string;
          username: string;
          room: string;
          content?: Json | null;
          type?: string | null;
        };
        Update: {
          id?: number;
          created_at?: string;
          username?: string;
          room?: string;
          content?: Json | null;
          type?: string | null;
        };
      };
      rooms: {
        Row: {
          id: number;
          created_at: string | null;
          name: string;
          status: string | null;
        };
        Insert: {
          id?: number;
          created_at?: string | null;
          name: string;
          status?: string | null;
        };
        Update: {
          id?: number;
          created_at?: string | null;
          name?: string;
          status?: string | null;
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

