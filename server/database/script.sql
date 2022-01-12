CREATE TABLE IF NOT EXISTS tb_readers(
    id_reader serial PRIMARY KEY,
    name_reader varchar(250) UNIQUE NOT NULL,
    email_reader varchar(250) UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS tb_books(
    id_book serial PRIMARY KEY,
    name_book varchar(100) UNIQUE NOT NULL,
    author_book varchar(100) UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS tb_favorite_reader_book(
    id_favorite serial,
    id_reader serial,
    id_book serial,
    PRIMARY KEY (id_favorite, id_reader, id_book),

    FOREIGN KEY (id_reader) REFERENCES tb_readers (id_reader),
    FOREIGN KEY (id_book) REFERENCES tb_books (id_book)
);