// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

// ERSETZE DIESE BEIDEN WERTE MIT DEINEN DATEN AUS DEM SUPABASE DASHBOARD
const supabaseUrl = 'https://chpnbohqftieplkpylgk.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNocG5ib2hxZnRpZXBsa3B5bGdrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODUzNTI4MjUsImV4cCI6MjEwMDkyODgyNX0.UPoHsyD4q_IBtWh-pFQTaMjweqhEVEtef5CMQqOmfg4';

export const supabase = createClient(supabaseUrl, supabaseKey);