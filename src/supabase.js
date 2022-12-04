import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://olfytviligafxumzylni.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9sZnl0dmlsaWdhZnh1bXp5bG5pIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njk3ODUyNjQsImV4cCI6MTk4NTM2MTI2NH0._1vjJO0hI7teZpb1Llq7EdmHy_gWHtJESoUduNCMcZc";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
