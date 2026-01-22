import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://smsrgdrzglacfprzjmbl.supabase.co"; // sua Project URL
const supabaseAnonKey = "sb_publishable_D0xJhp0dGurTeoT5hRhVTg_8-5cLhf1"; // sua anon public key

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
