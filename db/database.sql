CREATE DATABASE IF NOT EXIST crmprueba;

USE crmprueba

CREATE TABLE cliente (
    idCliente INT(13) NOT NULL AUTO_INCREMENT,
    Nombre_Cliente VARCHAR(45),
    Apellido_Cliente VARCHAR(45),
    Telefono_Cliente INT(12),
    Direccion_Cliente VARCHAR(45),
    Fecha_Insc_Cliente DATE,
    PRIMARY KEY (idCliente)
);

DESCRIBE cliente;

USE crmprueba;
INSERT INTO cliente (idCliente, Nombre_Cliente, Apellido_Cliente, Telefono_Cliente,Direccion_Cliente, Fecha_Insc_Cliente) VALUES
    (1, "Manuel", "Castellanos", 3157543774, "Calle siempreviva # 1 23", "2020-01-01"),
    (2, "Juan", "Castellanos", 3101234567, "Carrera 10 # 1 9", "2020-02-03"),
    (3, "Cesar", "Castellanos", 3001223344, "Calle 99 # 9 9", "2021-02-05"),
    (4, "Ramiro", "Meneses", 3029887766, "Carrera 5 # 6 78", "2022-10-25"),
    (5, "Raquel", "Zapata", 3203212121, "Calle 13 # 13 13", "2022-12-30")
