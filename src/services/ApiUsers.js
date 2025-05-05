import supabase from "./supabase"

export async function getUsers() {

    const { data: todos, error } = await supabase
        .from('todos')
        .select('*')
    if (error) {
        console.error('Error fetching users:', error)
        throw new Error('')
    }
    return todos
}