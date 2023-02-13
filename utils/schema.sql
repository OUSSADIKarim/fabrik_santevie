CREATE DATABASE santevie;
USE santevie;

CREATE TABLE patient (
    id_p INTEGER AUTO_INCREMENT,
    nom TEXT NOT NULL,
    prenom TEXT NOT NULL,
    sex TEXT NOT NULL,
    PRIMARY KEY (id_p)
);

INSERT INTO patient (nom, prenom, sex)
VALUES 
    ('NOM1', 'PRENOM1', 'HOMME'),
    ('NOM2', 'PRENOM2', 'FEMME');

CREATE TABLE rdv (
    id_rdv INTEGER AUTO_INCREMENT, 
    id_p INTEGER,
    date_rdv DATE NOT NULL,
    PRIMARY KEY (id_rdv),
    FOREIGN KEY (id_p) REFERENCES patient(id_p) ON DELETE CASCADE ON UPDATE CASCADE
);