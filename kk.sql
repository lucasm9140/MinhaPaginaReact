DELIMITER //

CREATE PROCEDURE sum_range(
    IN p_a INT,
    IN p_b INT,
    OUT p_result INT
)
BEGIN
    -- Validação
    IF p_b <= p_a THEN
        SIGNAL SQLSTATE '45000'
            SET MESSAGE_TEXT = 'O segundo valor deve ser maior que o primeiro';
    END IF;

    -- Gera a sequência recursivamente e soma
    WITH RECURSIVE seq(n) AS (
        SELECT p_a
      UNION ALL
        SELECT n + 1 FROM seq WHERE n < p_b
    )
    SELECT SUM(n) INTO p_result FROM seq;
END;
//

DELIMITER ;

-- Chamada de exemplo
CALL sum_range(3, 7, @soma);
SELECT @soma;  -- deve mostrar 25

CREATE TEMPORARY TABLE temperaturas (
  temp DECIMAL(4,1)
);

INSERT INTO temperaturas (temp) VALUES
  (23.6),
  (37.9),
  (25.1),
  (19.0),
  (29.8);

SELECT
  MIN(temp)           AS menor_temperatura,
  MAX(temp)           AS maior_temperatura,
  AVG(temp)           AS temperatura_media
FROM temperaturas;

-- 1) Cria uma tabela temporária para armazenar as 50 leituras
CREATE TEMPORARY TABLE numeros (
  posicao INT PRIMARY KEY,
  valor   DECIMAL(10,2)
);

-- 2) Insere os 50 valores (aqui como exemplo; você pode inserir via sua aplicação ou um LOAD DATA)
INSERT INTO numeros (posicao, valor) VALUES
  (1,  23.6), (2,  37.9), (3,  25.1), (4,  19.0), (5,  29.8),
  (6,  11.2), (7,  42.1), (8, 45.1), (9,  41.1), (10, 42.1),
  (11,  43.3), (12, 4.1), (13, 43.1), (14,  43.13), (15, 40),
  (16,  43.1), (17,  43.1), (18, 44.5), (19,  53.1), (20,  13.1),
  (21,  47.1), (22,  43.1), (23, 33.9), (24,  43.1), (25,  43.1),
  (26,  53.1), (27,  43.1), (28, 22.0), (29,  53.16), (30,  44.1),
  (31,  43.1), (32,  43.1), (33, 43.1), (34,  43.1), (35, 43.1),
  (36,  43.1), (37,  43.1), (38, 22.2), (39,  43.1), (40,  43.1),
  (41,  43.1), (42,  43.1), (43, 43.1), (44,  43.1), (45, 43.1),
  (46,  43.1), (47,  43.1), (48, 43.1), (49,  43.1), (50, 43.9),
  (46, 23.6), (47, 45.2), (48, 19.0), (49, 88.3), (50, 29.8);

-- 3) Consulta para encontrar valores que aparecem mais de uma vez,
--    listando em que posições cada repetição ocorre
SELECT
  valor,
  GROUP_CONCAT(posicao ORDER BY posicao) AS posicoes,
  COUNT(*) AS ocorrencias
FROM numeros
GROUP BY valor
HAVING ocorrencias > 1;

DELIMITER //

-- 1) Cria a função que arredonda uma única nota
CREATE FUNCTION round_grade(n INT)
RETURNS INT
DETERMINISTIC
BEGIN
  DECLARE m INT;
  -- notas abaixo de 38 não são arredondadas
  IF n < 38 THEN
    RETURN n;
  END IF;

  -- calcula o próximo múltiplo de 5
  SET m = CEIL(n/5) * 5;

  -- se a diferença for menor que 3, arredonda
  IF m - n < 3 THEN
    RETURN m;
  ELSE
    RETURN n;
  END IF;
END;
//

DELIMITER ;

SELECT salario, nome, cpf
FROM contratados
WHERE profissao IN ('Advogado', 'Empresário');

SELECT p.Valor AS Salario, c.Nome, c.CPF
FROM Contratado c
JOIN Profissao f ON c.ID_Profissao = f.ID
JOIN Pagamento p ON c.ID = p.ID_Contratado
WHERE f.Nome_Profissao IN ('Advogado', 'Empresário');
