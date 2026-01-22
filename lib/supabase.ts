import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://smsrgdrzglacfprzjmbl.supabase.co";

const supabaseAnonKey = "SUA_ANsb_publishable_D0xJhp0dGurTeoT5hRhVTg_8-5cLhf1"; // cole sua chave anon do Supabase

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
