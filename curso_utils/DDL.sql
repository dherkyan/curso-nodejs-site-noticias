CREATE TABLE `noticias` (
  `id_noticias` bigint(20) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(100) DEFAULT NULL,
  `texto` text,
  `data_criacao` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_noticias`)
)

ALTER TABLE portal_noticias.noticias ADD resumo varchar(100) NULL;
ALTER TABLE portal_noticias.noticias ADD autor varchar(30) NULL;
ALTER TABLE portal_noticias.noticias ADD data_noticia DATE NULL;