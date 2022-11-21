export interface Chapters {
    'id_capitulo' : number ,
    'titulo_cap' : string ,
    'descripcion' : string ,
    'numero_cap' : number ,
    'id_temp_fk' : number
}

export interface Comments {
    'id_comentario' : string ,
    'comentario' : string , 
    'valoracion' : boolean }

export interface Seasons {
    'id_temp' : number , 
    'titulo_temp' : string,
    'descripcion' : string ,
    'fecha_estreno' : number ,
    'numero_temp' : number
}
