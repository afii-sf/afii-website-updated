import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://jhuoubjorzswmuenkqvc.supabase.co'
const supabaseKey = import.meta.env.VITE_APIKEY;
const supabase = createClient(supabaseUrl, supabaseKey);
const names = [];
let defaultOrg = null
const fetchData = async () => {
    const { data, error } = await supabase
    .from('organizations')
    .select('name')
    if (error) {
        console.log('error', error)
    } else {
        data.map((org) => {
            names.push(org.name);
        });
    }
}
fetchData();

const defaultData = async () => {
    const { data, error } = await supabase
    .from('organizations')
    .select()
    .eq('default', true)
    if (error) {
        console.log('error', error)
    } else {
        defaultOrg = data;
    }
}
defaultData();

export { names, defaultOrg };