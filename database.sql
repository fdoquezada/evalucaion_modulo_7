CREATE DATABASE Bansocolar;

CREATE TABLE Usuarios(
    id INTEGER PRIMARY KEY NOT NULL,
    nombre VARCHAR(50) NOT NULL,
    balance FLOAT CHECK (balance >= 0));

CREATE TABLE transferencias (
    id serial PRIMARY KEY NOT NULL,
    Emisor INTEGER,
    receptor INTEGER,
    monton INTEGER,
    fecha TIMESTAMP,
    FOREIGN KEY (Emisor) REFERENCES Usuarios(id),
    FOREIGN KEY (receptor) REFERENCES Usuarios(id));

ALTER TABLE transferencias ALTER COLUMN emisor  SET NOT NULL;
ALTER TABLE transferencias ALTER COLUMN receptor  SET NOT NULL;
ALTER TABLE transferencias ALTER COLUMN monton  SET NOT NULL;

ALTER TABLE transferencias ALTER COLUMN fecha  SET NOT NULL;

ALTER TABLE transferencias 
RENAME monton to monto;
