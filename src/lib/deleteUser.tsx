import {fetchAllUsers} from "../lib/allUsers"
import React, {useState} from "react";

export async function deleteUser(slug: string) {

    let url = `https://dummyjson.com/users/${slug}`
    let response = await fetch(url, {
        method: 'DELETE',
    }).then(res => res.json())
    .then(console.log);
 
}
