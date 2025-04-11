--
-- PostgreSQL database dump
--

-- Dumped from database version 17.2
-- Dumped by pg_dump version 17.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: public; Type: SCHEMA; Schema: -; Owner: postgres
--

-- *not* creating schema, since initdb creates it


ALTER SCHEMA public OWNER TO postgres;

--
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON SCHEMA public IS '';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: _prisma_migrations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);


ALTER TABLE public._prisma_migrations OWNER TO postgres;

--
-- Name: actors; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.actors (
    id integer NOT NULL,
    "personId" integer NOT NULL,
    "nameRu" text,
    "nameEn" text,
    sex text,
    "posterUrl" text,
    growth integer,
    birthday timestamp(3) without time zone,
    age integer,
    birthplace text,
    "hasAwards" integer,
    profession text,
    facts jsonb
);


ALTER TABLE public.actors OWNER TO postgres;

--
-- Name: actors_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.actors_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.actors_id_seq OWNER TO postgres;

--
-- Name: actors_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.actors_id_seq OWNED BY public.actors.id;


--
-- Name: favouritesmovies; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.favouritesmovies (
    id integer NOT NULL,
    imdb_id character varying(20),
    kinopoisk_id integer,
    name_en text,
    name_original text,
    name_ru text,
    countries jsonb,
    genres jsonb,
    persons jsonb,
    poster_url text,
    poster_url_preview text,
    rating_imdb numeric(3,1),
    rating_kinopoisk numeric(3,1),
    type character varying(10),
    year integer,
    description text,
    movie_length integer,
    rating_age_limits text,
    videos jsonb
);


ALTER TABLE public.favouritesmovies OWNER TO postgres;

--
-- Name: favouritesmovies_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.favouritesmovies_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.favouritesmovies_id_seq OWNER TO postgres;

--
-- Name: favouritesmovies_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.favouritesmovies_id_seq OWNED BY public.favouritesmovies.id;


--
-- Name: images; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.images (
    id integer NOT NULL,
    kinopoisk_id integer,
    url text
);


ALTER TABLE public.images OWNER TO postgres;

--
-- Name: images_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.images_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.images_id_seq OWNER TO postgres;

--
-- Name: images_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.images_id_seq OWNED BY public.images.id;


--
-- Name: movies; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.movies (
    id integer NOT NULL,
    imdb_id character varying(20),
    kinopoisk_id integer,
    name_en text,
    name_original text,
    name_ru text,
    countries jsonb,
    genres jsonb,
    persons jsonb,
    poster_url text,
    poster_url_preview text,
    rating_imdb numeric(3,1),
    rating_kinopoisk numeric(3,1),
    type character varying(10),
    year integer,
    movie_length integer,
    description text,
    rating_age_limits text,
    videos jsonb
);


ALTER TABLE public.movies OWNER TO postgres;

--
-- Name: movies_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.movies_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.movies_id_seq OWNER TO postgres;

--
-- Name: movies_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.movies_id_seq OWNED BY public.movies.id;


--
-- Name: persons; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.persons (
    id integer NOT NULL,
    staff_id integer NOT NULL,
    kinopoisk_id integer,
    name_en text,
    name_ru text,
    description text,
    poster_url text,
    profession_text text,
    profession_key character varying(50)
);


ALTER TABLE public.persons OWNER TO postgres;

--
-- Name: persons_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.persons_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.persons_id_seq OWNER TO postgres;

--
-- Name: persons_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.persons_id_seq OWNED BY public.persons.id;


--
-- Name: similarmovies; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.similarmovies (
    id integer NOT NULL,
    film_id integer NOT NULL,
    name_ru text,
    name_en text,
    name_original text,
    poster_url text,
    poster_url_preview text,
    relation_type text,
    kinopoisk_id integer NOT NULL
);


ALTER TABLE public.similarmovies OWNER TO postgres;

--
-- Name: similarmovies_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.similarmovies_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.similarmovies_id_seq OWNER TO postgres;

--
-- Name: similarmovies_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.similarmovies_id_seq OWNED BY public.similarmovies.id;


--
-- Name: actors id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.actors ALTER COLUMN id SET DEFAULT nextval('public.actors_id_seq'::regclass);


--
-- Name: favouritesmovies id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.favouritesmovies ALTER COLUMN id SET DEFAULT nextval('public.favouritesmovies_id_seq'::regclass);


--
-- Name: images id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.images ALTER COLUMN id SET DEFAULT nextval('public.images_id_seq'::regclass);


--
-- Name: movies id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.movies ALTER COLUMN id SET DEFAULT nextval('public.movies_id_seq'::regclass);


--
-- Name: persons id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.persons ALTER COLUMN id SET DEFAULT nextval('public.persons_id_seq'::regclass);


--
-- Name: similarmovies id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.similarmovies ALTER COLUMN id SET DEFAULT nextval('public.similarmovies_id_seq'::regclass);


--
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
dfcb92f0-ae0a-4fe0-ad5b-5e850e7fdf38	903f1dc20d022c2d0095f34e975041fab6c485bdb2de21ec772fa4afbffae582	2025-03-30 09:10:32.376534+00	20250330091032_first	\N	\N	2025-03-30 09:10:32.321049+00	1
86c504eb-9004-4754-b698-2b5a39e2a845	bec378e80004976de62e75de5209f3bb92349d93a7bde95797f081b8ac08e766	2025-03-31 07:22:37.681088+00	20250331072237_add_new_fields	\N	\N	2025-03-31 07:22:37.668812+00	1
3c467f64-0102-4daf-8d65-457a578ade20	7c0def83be0cada7c9e64ac655662fd3f704c2e76ac7465fdd379ee2c137f7ac	2025-03-31 12:38:07.738855+00	20250331123807_add_images	\N	\N	2025-03-31 12:38:07.69261+00	1
9f3f3c67-2d9f-4b30-b6a5-600907822d92	a73704be50b7f0b3ba9ea8d03ae58aec6539681d99356eaece0853e58847edc9	2025-04-01 11:30:58.637267+00	20250401113058_add_similarmovies	\N	\N	2025-04-01 11:30:58.58871+00	1
\.


--
-- Data for Name: actors; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.actors (id, "personId", "nameRu", "nameEn", sex, "posterUrl", growth, birthday, age, birthplace, "hasAwards", profession, facts) FROM stdin;
\.


--
-- Data for Name: favouritesmovies; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.favouritesmovies (id, imdb_id, kinopoisk_id, name_en, name_original, name_ru, countries, genres, persons, poster_url, poster_url_preview, rating_imdb, rating_kinopoisk, type, year, description, movie_length, rating_age_limits, videos) FROM stdin;
18	\N	1111028	\N	Miniforce: New Heroes Rise	Минифорс. Новые герои	[{"country": "Корея Южная"}]	[{"genre": "фантастика"}, {"genre": "приключения"}, {"genre": "мультфильм"}, {"genre": "детский"}]	null	https://kinopoiskapiunofficial.tech/images/posters/kp/1111028.jpg	https://kinopoiskapiunofficial.tech/images/posters/kp_small/1111028.jpg	\N	9.2	FILM	2016	Приквел популярного сериала, повествующий  о создании суперкоманды Минифорс. Члены команды – очаровательные зверушки-пушистики, но за их милой внешностью скрываются настоящие отважные воины. Доктор Джереми из лаборатории Минифорс исследует «эллиниум» – неизвестное вещество, содержащее могучую силу. Зевс, капитан Армии Ящериц, рассматривает эллиниум с целью создания смертоносного оружия против человечества. Однажды он  атакует лабораторию и похищает эллиниум. Лаборатория Минифорс созывает суперкоманду – это наши знакомые Вольт, Сэмми, Макс и Люси. К ним присоединяется Анна, дочь доктора Джереми. Минифорс отправляются на борьбу с Армией Ящериц с целью вернуть эллиниум. Им предстоит множество испытаний, чтобы исполнить миссию.	68	age6	[{"url": "https://widgets.kinopoisk.ru/discovery/trailer/145023?onlyPlayer=1&autoplay=1&cover=1", "name": "Русский трейлер", "site": "KINOPOISK_WIDGET"}]
28	tt5396486	962472	\N	Team Hot Wheels: The Skills to Thrill	Hot Wheels. За гранью воображения	[{"country": "США"}]	[{"genre": "мультфильм"}, {"genre": "детский"}]	null	https://kinopoiskapiunofficial.tech/images/posters/kp/962472.jpg	https://kinopoiskapiunofficial.tech/images/posters/kp_small/962472.jpg	6.8	9.3	FILM	2015	В Хот Вилс появляется загадочный новый житель по имени Гарри. Он демонстрирует изобретение, которое может решить все дорожные проблемы. Новый дистанционно-управляемый радиокомплекс способен лишить жителей города всех забот и хлопот! Не все друзья уверены, что Гарри можно доверять… Оказывается, что у парнишки есть один секрет.	45	age6	[]
30	tt0120689	435	\N	The Green Mile	Зеленая миля	[{"country": "США"}]	[{"genre": "драма"}, {"genre": "криминал"}, {"genre": "фэнтези"}]	null	https://kinopoiskapiunofficial.tech/images/posters/kp/435.jpg	https://kinopoiskapiunofficial.tech/images/posters/kp_small/435.jpg	8.6	9.1	FILM	1999	Пол Эджкомб — начальник блока смертников в тюрьме «Холодная гора», каждый из узников которого однажды проходит «зеленую милю» по пути к месту казни. Пол повидал много заключённых и надзирателей за время работы. Однако гигант Джон Коффи, обвинённый в страшном преступлении, стал одним из самых необычных обитателей блока.	189	age18	[{"url": "https://www.youtube.com/watch?v=mccs8Ql8m8o", "name": "Французский трейлер", "site": "YOUTUBE"}, {"url": "https://widgets.kinopoisk.ru/discovery/trailer/13384?onlyPlayer=1&autoplay=1&cover=1", "name": "О съёмках", "site": "KINOPOISK_WIDGET"}, {"url": "https://widgets.kinopoisk.ru/discovery/trailer/13494?onlyPlayer=1&autoplay=1&cover=1", "name": "Трейлер (русский язык)", "site": "KINOPOISK_WIDGET"}, {"url": "https://www.youtube.com/v/4HR_hk5I49c", "name": "Русский ТВ-ролик", "site": "YOUTUBE"}, {"url": "https://www.youtube.com/v/NRT11KuW6L0", "name": "Немецкий трейлер", "site": "YOUTUBE"}, {"url": "https://widgets.kinopoisk.ru/discovery/trailer/40763?onlyPlayer=1&autoplay=1&cover=1", "name": "Тизер", "site": "KINOPOISK_WIDGET"}, {"url": "https://widgets.kinopoisk.ru/discovery/trailer/13420?onlyPlayer=1&autoplay=1&cover=1", "name": "Фрагмент (содержит спойлер!) (дублированный)", "site": "KINOPOISK_WIDGET"}, {"url": "http://trailers.s3.mds.yandex.net/video_original/2869-62a449552b9cd4cdf3004a0a6ba13feb", "name": "Трейлер", "site": "UNKNOWN"}]
\.


--
-- Data for Name: images; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.images (id, kinopoisk_id, url) FROM stdin;
1	1111028	https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/58389fba-ac86-43bf-b6c0-04c14bce6e24/orig
2	1111028	https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/caa0930a-c109-4f82-8e06-174cc7f319c1/orig
3	1111028	https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/4fafe448-341d-42fe-8960-987d2982f81d/orig
4	1111028	https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/d34d0e28-2143-4b5b-968e-fe067d782dc1/orig
5	1111028	https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/f90d6eb2-152d-495f-87be-d01e50c9eb10/orig
6	1111028	https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/d7049c9f-0c3f-44a4-9a84-5c340ea5269e/orig
7	1111028	https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/3c9c9fdf-b565-4185-83d0-04202861ea18/orig
8	1111028	https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/55b676fb-80f0-40c9-9749-27b799f7f2cd/orig
9	1111028	https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/1e780898-fa24-4755-b90c-8497dfcc61a1/orig
10	1111028	https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/7068eb1c-1b73-46d9-92bf-ccdb00d4bedd/orig
11	1111028	https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/a1a2caa4-6983-46d3-bd14-bfff259dd450/orig
12	1111028	https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/f9648933-5372-421d-9e8e-38673c4c0f15/orig
13	1111028	https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/15312927-6376-4395-a1b3-0b4570ff5ee3/orig
14	45319	https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/ce6a4338-926b-45f5-9b19-1c64b0b1a636/orig
15	45319	https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/5f0df691-f745-458b-89ea-2eb7fbf2256f/orig
16	45319	https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/f2e58079-9f2d-44a8-acc4-53d490f772dd/orig
17	45319	https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/661c234d-db1e-46ad-85a3-a9de159a7b37/orig
18	45319	https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/78b851c3-c4d1-417d-aa5e-4b8b95132e80/orig
19	45319	https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/ead5f169-6230-430e-ba5d-723cb41b29bc/orig
20	45319	https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/ac1cdeed-e9bd-4efb-bdef-a86c49fa627d/orig
21	45319	https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/bd1cd11b-2d17-4a8c-b582-e07ebdea2a8e/orig
22	45319	https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/c1ec90d9-b215-4fad-b08f-877cf2c75942/orig
23	1003587	https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/28388c45-3b08-4b45-866f-43df6ed8242b/orig
24	1003587	https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/4b726b97-a9b6-4376-81e4-371c496df971/orig
25	1003587	https://avatars.mds.yandex.net/get-kinopoisk-image/1777765/e09394ce-d1df-448e-81e9-fcc58c89897c/orig
26	1003587	https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/36bc04e8-3f31-4716-94dd-63fa5e5dc64f/orig
27	1003587	https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/fb99e7d5-8fd1-439d-8a18-8dc2316e5f65/orig
28	1003587	https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/fc19fcbe-e21d-4116-a8f0-9d5119e3f7e2/orig
29	1003587	https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/6840acdd-0220-4de3-a021-a45eaa0bda36/orig
30	1003587	https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/c1282e1a-2620-4b0c-a78e-52654404e025/orig
31	1003587	https://avatars.mds.yandex.net/get-kinopoisk-image/1777765/a9f3f94e-932d-442a-a3a9-2df440a33a24/orig
32	1003587	https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/3b8e459f-e1cd-4273-91ee-01a91ba8f496/orig
33	1003587	https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/e4a5def1-fe79-4344-8025-765b679685c2/orig
34	1003587	https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/2a1f53e3-508f-4ad1-8d5a-18c76794776c/orig
35	1003587	https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/b703a9d9-8fd0-4c64-ba04-703de54f8ae1/orig
36	1003587	https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/48778dfd-a309-4e6f-b97a-88f29c9522a5/orig
37	1003587	https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/18415100-ccb9-4aad-94f6-1b808ae96474/orig
38	1003587	https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/1b7d9887-e637-4050-b283-a459e883360c/orig
39	435	https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/35975f3e-11e5-483f-9895-be2689f99a0d/orig
40	435	https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/c4c5ab16-01e4-416c-abbe-c512f1d45697/orig
41	435	https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/77a4eeb5-38c2-4720-b252-715c6a7e0a93/orig
42	435	https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/6c27c30c-d0fd-4601-8608-e93d83af4b78/orig
43	435	https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/1f2dd4c0-b687-45b9-8f1a-24cc61c9eb0f/orig
44	435	https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/9e954218-9173-43ee-aeeb-9e2e3527a3ae/orig
45	435	https://avatars.mds.yandex.net/get-kinopoisk-image/1777765/b8735074-4878-48bb-a532-d8c49510a0f6/orig
46	435	https://avatars.mds.yandex.net/get-kinopoisk-image/1777765/6e2b95c4-9ee5-48dd-9211-ca784030fbfa/orig
47	435	https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/5c020550-2e0f-495a-a2d6-fd6b70da3567/orig
48	435	https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/5ab8a6c2-888c-4bec-97d5-55e42ecb4c96/orig
49	435	https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/956908ae-b855-4ea4-ae2f-86f33ebf9955/orig
50	435	https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/caaf02e9-4473-473c-a5d6-643a51fa9d53/orig
51	435	https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/499746a9-8600-4036-828b-30c4cc2e7a7b/orig
52	435	https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/f0a45ae4-0cfd-4135-9abe-2e6823646036/orig
53	435	https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/e0f8f189-917c-429d-9f43-eab80d96bf9e/orig
54	435	https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/ccf83f2d-78ea-41e2-aee0-894bd88381c7/orig
55	435	https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/52e26f1e-e7c9-490f-a786-7c207477132e/orig
56	435	https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/71a79f6c-4106-4e47-b296-ec6284427112/orig
57	435	https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/2b35fd5c-9c45-4aab-b4ca-ac49970d5b16/orig
58	435	https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/9851896a-77bc-4b13-92f0-1efeaa9f344c/orig
59	326	https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/a9b7373f-8165-4d2f-a960-8caa2fb38cc1/orig
60	326	https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/92cb6b5c-aaa5-4d7c-aed9-c9939518204e/orig
61	326	https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/a28e01da-fc3a-4561-968b-493b59c4af8b/orig
62	326	https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/1cb90622-458c-4bae-bfb1-f477e177c139/orig
63	326	https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/b7fa3690-400b-4386-bf63-0181bfa47aa6/orig
64	326	https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/11b832e7-2e6e-4db1-8077-46d4b807a6b5/orig
65	326	https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/9e5b639b-4c6f-443e-8b95-911673258725/orig
66	326	https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/522a7440-c128-4f8b-bce0-78e5015085bc/orig
67	326	https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/b42d3573-d32c-4172-985a-185f4de9a88f/orig
68	326	https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/bb74dca7-d662-409b-9d32-b1422b7acb2e/orig
69	326	https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/3f4af917-1cc2-41f8-9c5f-992a7172f632/orig
70	326	https://avatars.mds.yandex.net/get-kinopoisk-image/1898899/41864b7f-996d-4fa6-a988-d9dab27de2b9/orig
71	326	https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/4f032173-d0c8-41e7-a2a8-233f3b9e9cb6/orig
72	326	https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/4f0f0e31-4f8d-43cf-9c95-1a4d42606ba1/orig
73	326	https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/55d72401-ba33-4cf5-924f-822c45486261/orig
74	326	https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/8b2e4662-a75b-49bb-a64c-0c99e6779bea/orig
75	326	https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/3850c9c6-6349-49e1-8666-f354cf28d128/orig
76	326	https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/87e1578e-8b3e-4adb-ba33-6d93ef17e2ca/orig
77	326	https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/f1c70b22-f327-45d5-9dee-50f694a89d1c/orig
78	326	https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/15a79875-4799-46fd-b51b-d3a9b42cdfe3/orig
79	1313572	https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/d6ab3d1c-6d2e-486e-91ad-760ba085cca0/orig
80	1313572	https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/f9fc4ef5-2401-436b-859d-9947d87f6efb/orig
81	1313572	https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/e511b509-424c-44f7-bd9e-2f2d656818e6/orig
82	1313572	https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/d2a0849a-b018-4534-8aa2-ad5a559e2854/orig
83	1313572	https://avatars.mds.yandex.net/get-kinopoisk-image/1777765/99b5df95-124d-4c15-a246-d27433c17f34/orig
84	1313572	https://avatars.mds.yandex.net/get-kinopoisk-image/1777765/e30765cc-efa4-428f-980a-aee831ec62f9/orig
85	1313572	https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/fcb60029-47b2-45f0-af69-fba99ea2e655/orig
86	1313572	https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/72e37487-3729-4e45-9e4e-4ab8eef09162/orig
87	1313572	https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/ba068f5e-29a8-4991-b9fb-e439c7de0097/orig
88	1313572	https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/38ee9c1f-de09-47c6-85f4-318ef21a2633/orig
89	1313572	https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/7e54394d-c146-47ae-a8ad-ddaf2359cda0/orig
90	1313572	https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/68864f3a-1152-4f55-b6db-2e72967aaa19/orig
91	1313572	https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/a83aa3ad-cbe9-4597-bd65-adcf9745b62f/orig
\.


--
-- Data for Name: movies; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.movies (id, imdb_id, kinopoisk_id, name_en, name_original, name_ru, countries, genres, persons, poster_url, poster_url_preview, rating_imdb, rating_kinopoisk, type, year, movie_length, description, rating_age_limits, videos) FROM stdin;
7	\N	1111028	\N	Miniforce: New Heroes Rise	Минифорс. Новые герои	[{"country": "Корея Южная"}]	[{"genre": "фантастика"}, {"genre": "приключения"}, {"genre": "мультфильм"}, {"genre": "детский"}]	\N	https://kinopoiskapiunofficial.tech/images/posters/kp/1111028.jpg	https://kinopoiskapiunofficial.tech/images/posters/kp_small/1111028.jpg	\N	9.2	FILM	2016	68	Приквел популярного сериала, повествующий  о создании суперкоманды Минифорс. Члены команды – очаровательные зверушки-пушистики, но за их милой внешностью скрываются настоящие отважные воины. Доктор Джереми из лаборатории Минифорс исследует «эллиниум» – неизвестное вещество, содержащее могучую силу. Зевс, капитан Армии Ящериц, рассматривает эллиниум с целью создания смертоносного оружия против человечества. Однажды он  атакует лабораторию и похищает эллиниум. Лаборатория Минифорс созывает суперкоманду – это наши знакомые Вольт, Сэмми, Макс и Люси. К ним присоединяется Анна, дочь доктора Джереми. Минифорс отправляются на борьбу с Армией Ящериц с целью вернуть эллиниум. Им предстоит множество испытаний, чтобы исполнить миссию.	age6	[{"url": "https://widgets.kinopoisk.ru/discovery/trailer/145023?onlyPlayer=1&autoplay=1&cover=1", "name": "Русский трейлер", "site": "KINOPOISK_WIDGET"}]
8	tt13524234	2000090	\N	Folklore: The Long Pond Studio Sessions	\N	[{"country": "США"}]	[{"genre": "драма"}, {"genre": "музыка"}, {"genre": "документальный"}]	\N	https://kinopoiskapiunofficial.tech/images/posters/kp/2000090.jpg	https://kinopoiskapiunofficial.tech/images/posters/kp_small/2000090.jpg	8.4	9.1	FILM	2020	105	\N	\N	[{"url": "https://www.youtube.com/watch?v=ubK30MxDfxM", "name": "Трейлер", "site": "YOUTUBE"}]
2	tt5396486	962472	\N	Team Hot Wheels: The Skills to Thrill	Hot Wheels. За гранью воображения	[{"country": "США"}]	[{"genre": "мультфильм"}, {"genre": "детский"}]	\N	https://kinopoiskapiunofficial.tech/images/posters/kp/962472.jpg	https://kinopoiskapiunofficial.tech/images/posters/kp_small/962472.jpg	6.8	9.3	FILM	2015	45	В Хот Вилс появляется загадочный новый житель по имени Гарри. Он демонстрирует изобретение, которое может решить все дорожные проблемы. Новый дистанционно-управляемый радиокомплекс способен лишить жителей города всех забот и хлопот! Не все друзья уверены, что Гарри можно доверять… Оказывается, что у парнишки есть один секрет.	age6	[]
3	tt0216434	45319	\N	\N	Жил-был пёс	[{"country": "СССР"}]	[{"genre": "комедия"}, {"genre": "мультфильм"}, {"genre": "семейный"}, {"genre": "короткометражка"}]	\N	https://kinopoiskapiunofficial.tech/images/posters/kp/45319.jpg	https://kinopoiskapiunofficial.tech/images/posters/kp_small/45319.jpg	8.4	9.2	FILM	1982	10	Жил-был пёс. Верно служил, но выгнали его по старости. И решил он повеситься, да повстречал в лесу такого же старого волка...	age0	[]
4	\N	1339977	\N	Threat Level Midnight: The Movie	Уровень тревоги: Полночь	[{"country": "США"}, {"country": "Великобритания"}]	[{"genre": "боевик"}, {"genre": "комедия"}, {"genre": "короткометражка"}]	\N	https://kinopoiskapiunofficial.tech/images/posters/kp/1339977.jpg	https://kinopoiskapiunofficial.tech/images/posters/kp_small/1339977.jpg	9.6	9.2	FILM	2011	25	\N	\N	[]
6	tt6146460	1003587	\N	Hamilton's America	Гамильтон	[{"country": "США"}]	[{"genre": "биография"}, {"genre": "мюзикл"}]	\N	https://kinopoiskapiunofficial.tech/images/posters/kp/1003587.jpg	https://kinopoiskapiunofficial.tech/images/posters/kp_small/1003587.jpg	8.3	9.2	FILM	2016	90	Рассказ о жизни американского государственного и политического деятеля Александра Гамильтона.	\N	[]
12	tt0120689	435	\N	The Green Mile	Зеленая миля	[{"country": "США"}]	[{"genre": "драма"}, {"genre": "криминал"}, {"genre": "фэнтези"}]	\N	https://kinopoiskapiunofficial.tech/images/posters/kp/435.jpg	https://kinopoiskapiunofficial.tech/images/posters/kp_small/435.jpg	8.6	9.1	FILM	1999	189	Пол Эджкомб — начальник блока смертников в тюрьме «Холодная гора», каждый из узников которого однажды проходит «зеленую милю» по пути к месту казни. Пол повидал много заключённых и надзирателей за время работы. Однако гигант Джон Коффи, обвинённый в страшном преступлении, стал одним из самых необычных обитателей блока.	age18	[{"url": "https://www.youtube.com/watch?v=mccs8Ql8m8o", "name": "Французский трейлер", "site": "YOUTUBE"}, {"url": "https://widgets.kinopoisk.ru/discovery/trailer/13384?onlyPlayer=1&autoplay=1&cover=1", "name": "О съёмках", "site": "KINOPOISK_WIDGET"}, {"url": "https://widgets.kinopoisk.ru/discovery/trailer/13494?onlyPlayer=1&autoplay=1&cover=1", "name": "Трейлер (русский язык)", "site": "KINOPOISK_WIDGET"}, {"url": "https://www.youtube.com/v/4HR_hk5I49c", "name": "Русский ТВ-ролик", "site": "YOUTUBE"}, {"url": "https://www.youtube.com/v/NRT11KuW6L0", "name": "Немецкий трейлер", "site": "YOUTUBE"}, {"url": "https://widgets.kinopoisk.ru/discovery/trailer/40763?onlyPlayer=1&autoplay=1&cover=1", "name": "Тизер", "site": "KINOPOISK_WIDGET"}, {"url": "https://widgets.kinopoisk.ru/discovery/trailer/13420?onlyPlayer=1&autoplay=1&cover=1", "name": "Фрагмент (содержит спойлер!) (дублированный)", "site": "KINOPOISK_WIDGET"}, {"url": "http://trailers.s3.mds.yandex.net/video_original/2869-62a449552b9cd4cdf3004a0a6ba13feb", "name": "Трейлер", "site": "UNKNOWN"}]
13	\N	1101316	\N	Enchantimals Finding Home	Энчантималс. Дом, милый дом	[{"country": "США"}]	[{"genre": "приключения"}, {"genre": "фэнтези"}, {"genre": "мультфильм"}, {"genre": "детский"}]	\N	https://kinopoiskapiunofficial.tech/images/posters/kp/1101316.jpg	https://kinopoiskapiunofficial.tech/images/posters/kp_small/1101316.jpg	6.6	9.1	FILM	2017	60	Юные волшебницы, обнаружив в Вандервуде потерявшуюся девочку-павлина и ее питомца, помогают им найти новый дом.	age0	[]
16	tt3001718	1346348	\N	Proklyatie serogo slonyonka	Проклятие серого слонёнка	[{"country": "Россия"}]	[{"genre": "документальный"}]	\N	https://kinopoiskapiunofficial.tech/images/posters/kp/1346348.jpg	https://kinopoiskapiunofficial.tech/images/posters/kp_small/1346348.jpg	8.9	9.0	FILM	2011	77	О появлении и распространении в России в 90-ых годах 8-битных приставок и всего, что с ними связано.	age18	[]
17	\N	542577	\N	\N	Серафим — рожденный пламенным	[{"country": "Россия"}]	[]	\N	https://kinopoiskapiunofficial.tech/images/posters/kp/542577.jpg	https://kinopoiskapiunofficial.tech/images/posters/kp_small/542577.jpg	\N	9.0	FILM	2006	30	Четыре раза он мог умереть. Но смерть оказывалась бессильна. Пять лет никто не видел его лица. И еще пять лет никто не слышал его голоса. А когда он заговорил, первый посетитель исцелился от неизлечимой болезни. Он мог стать богатым и знаменитым, но выбрал нищету. Он всю жизнь называл себя «убогим». Но к нему, как к последней надежде, стекались тысячи людей со всей России. Он избегал почестей и славы, но прославился на весь мир. Он жил во имя Господа. И Господь не предал Его забвению.	age0	[]
10	tt6679360	1043713	\N	\N	Он вам не Димон	[{"country": "Россия"}]	[{"genre": "документальный"}]	\N	https://kinopoiskapiunofficial.tech/images/posters/kp/1043713.jpg	https://kinopoiskapiunofficial.tech/images/posters/kp_small/1043713.jpg	8.8	9.1	FILM	2017	49	Рассказ о предполагаемом недвижимом имуществе председателя Правительства Российской Федерации Дмитрия Медведева.	\N	[]
14	tt6713862	1101247	\N	Samadhi	Самадхи, часть 1: Майя, иллюзия обособленного себя	[{"country": "Канада"}]	[{"genre": "документальный"}]	\N	https://kinopoiskapiunofficial.tech/images/posters/kp/1101247.jpg	https://kinopoiskapiunofficial.tech/images/posters/kp_small/1101247.jpg	8.2	9.1	FILM	2017	60	\N	\N	[]
15	tt2669078	734128	\N	Time Framed	Время не терпит	[{"country": "США"}]	[{"genre": "драма"}]	\N	https://kinopoiskapiunofficial.tech/images/posters/kp/734128.jpg	https://kinopoiskapiunofficial.tech/images/posters/kp_small/734128.jpg	8.9	9.0	FILM	2016	\N	История агента Трумана Блэка, секретного сотрудника, который должен защитить правительство и корпоративные интересы в миссии, ставки в которой чрезвычайно высоки.	\N	[{"url": "https://www.youtube.com/watch?v=7TJyAe07J-Q", "name": "Трейлер", "site": "YOUTUBE"}]
1	tt5223716	952236	\N	Team Hot Wheels: Build the Epic Race	Hot Wheels. Мегатрасса	[{"country": "США"}]	[{"genre": "мультфильм"}, {"genre": "детский"}]	\N	https://kinopoiskapiunofficial.tech/images/posters/kp/952236.jpg	https://kinopoiskapiunofficial.tech/images/posters/kp_small/952236.jpg	6.3	9.3	FILM	2015	45	Герои команды Хот Вилс построили для жителей города невероятную Мегатрассу для ежегодных городских Мегагонок. Но не обошлось без форс-мажора - на город напали дорожные пираты! Друзьям придется приложить огромные усилия, чтобы освободить Уайта и спасти жителей города от катастрофы.	age6	[]
9	\N	5332560	\N	\N	Как я стал ребенком	[{"country": "Россия"}]	[{"genre": "документальный"}]	\N	https://kinopoiskapiunofficial.tech/images/posters/kp/5332560.jpg	https://kinopoiskapiunofficial.tech/images/posters/kp_small/5332560.jpg	\N	9.1	FILM	2023	\N	Помогать — просто! Это уже 15 лет на личном примере доказывает народный артист России, художественный руководитель МХТ им. А. П. Чехова Константин Хабенский. Зрители знают и любят его по многочисленным ролям в кино и театре, но в этом фильме он расскажет о другой, пожалуй, самой сложной своей роли. Константин — основатель благотворительного фонда, который помогает детям и молодым взрослым с опухолями мозга.	age0	[{"url": "https://trailers.s3.mds.yandex.net/video_original/191430-23847811898095994.mov", "name": "Трейлер", "site": "UNKNOWN"}]
19	tt5371572	961694	\N	Lego Marvel Super Heroes: Avengers Reassembled	LEGO Супергерои Marvel: Мстители. Снова в сборе	[{"country": "США"}]	[{"genre": "фантастика"}, {"genre": "приключения"}, {"genre": "боевик"}, {"genre": "комедия"}, {"genre": "мультфильм"}, {"genre": "семейный"}]	\N	https://kinopoiskapiunofficial.tech/images/posters/kp/961694.jpg	https://kinopoiskapiunofficial.tech/images/posters/kp_small/961694.jpg	6.1	9.0	FILM	2015	22	\N	age6	[]
20	tt10018754	1405666	\N	Le plus beau pays du monde 3	Убежище. Истории о выживании в Альпах	[{"country": "Франция"}]	[{"genre": "документальный"}]	\N	https://kinopoiskapiunofficial.tech/images/posters/kp/1405666.jpg	https://kinopoiskapiunofficial.tech/images/posters/kp_small/1405666.jpg	8.6	9.0	FILM	2019	\N	\N	age6	[{"url": "https://youtu.be/nOrcsaAx2BI", "name": "Тизер", "site": "YOUTUBE"}]
5	\N	2500772	\N	\N	Жизнь человека. Последнее интервью	[{"country": "Россия"}]	[{"genre": "документальный"}]	\N	https://kinopoiskapiunofficial.tech/images/posters/kp/2500772.jpg	https://kinopoiskapiunofficial.tech/images/posters/kp_small/2500772.jpg	\N	9.2	FILM	2020	88	В марте 2018 года один из лучших хирургов-онкологов страны Андрей Павленко узнал, что у него рак желудка агрессивной формы. Как онколог, Андрей понимал, что скорее всего умрет, но решил лечиться и запустить в России публичный медиапроект «Жизнь человека» о том, как принять диагноз и бороться с онкологическими заболеваниями, что нужно делать и где искать помощь.\n\nВ ноябре 2019 года Андрей дал последнее интервью команде проекта «Жизнь человека». Этот фильм — своеобразное завещание Андрея. Послание всем, кто следил за его судьбой, онкологическим пациентам, их родственникам, и врачам.	age18	[{"url": "http://trailers.s3.mds.yandex.net/video_original/171801-ee11b317740c1f425c92c14fa06c73e6.mp4", "name": "Трейлер", "site": "UNKNOWN"}]
11	tt0111161	326	\N	The Shawshank Redemption	Побег из Шоушенка	[{"country": "США"}]	[{"genre": "драма"}]	\N	https://kinopoiskapiunofficial.tech/images/posters/kp/326.jpg	https://kinopoiskapiunofficial.tech/images/posters/kp_small/326.jpg	9.3	9.1	FILM	1994	142	Бухгалтер Энди Дюфрейн обвинён в убийстве собственной жены и её любовника. Оказавшись в тюрьме под названием Шоушенк, он сталкивается с жестокостью и беззаконием, царящими по обе стороны решётки. Каждый, кто попадает в эти стены, становится их рабом до конца жизни. Но Энди, обладающий живым умом и доброй душой, находит подход как к заключённым, так и к охранникам, добиваясь их особого к себе расположения.	age18	[{"url": "https://widgets.kinopoisk.ru/discovery/trailer/12799?onlyPlayer=1&autoplay=1&cover=1", "name": "Трейлер (русский язык)", "site": "KINOPOISK_WIDGET"}, {"url": "https://widgets.kinopoisk.ru/discovery/trailer/88184?onlyPlayer=1&autoplay=1&cover=1", "name": "О съёмках (русские субтитры)", "site": "KINOPOISK_WIDGET"}, {"url": "https://widgets.kinopoisk.ru/discovery/trailer/3548?onlyPlayer=1&autoplay=1&cover=1", "name": "Трейлер (русские субтитры)", "site": "KINOPOISK_WIDGET"}, {"url": "https://widgets.kinopoisk.ru/discovery/trailer/41133?onlyPlayer=1&autoplay=1&cover=1", "name": "Трейлер №2", "site": "KINOPOISK_WIDGET"}]
18	\N	1313572	\N	\N	Монте-Кристо. Мюзикл	[{"country": "Россия"}]	[{"genre": "мелодрама"}, {"genre": "мюзикл"}]	\N	https://kinopoiskapiunofficial.tech/images/posters/kp/1313572.jpg	https://kinopoiskapiunofficial.tech/images/posters/kp_small/1313572.jpg	\N	9.0	FILM	2019	132	Киноверсия легендарного московского мюзикла «Монте-Кристо». Это знаменитый российский мюзикл-хит, рекордсмен по продолжительности театрального проката, в котором зрителя ждут звёздный состав актеров, потрясающие голоса, красочные костюмы и грандиозные декорации.	age12	[{"url": "http://trailers.s3.mds.yandex.net/video_original/163194-8cca77c96be4d9f605fb776d2f6ce7b0.mp4", "name": "Трейлер №2", "site": "UNKNOWN"}, {"url": "http://trailers.s3.mds.yandex.net/video_original/163193-ed08b7b84d88685a47cf8e307c35e626.mp4", "name": "Трейлер", "site": "UNKNOWN"}]
\.


--
-- Data for Name: persons; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.persons (id, staff_id, kinopoisk_id, name_en, name_ru, description, poster_url, profession_text, profession_key) FROM stdin;
1	1804374	952236	Matt Danner	Мэтт Дэннер	\N	https://st.kp.yandex.net/images/actor_iphone/iphone360_1804374.jpg	Режиссеры	DIRECTOR
2	2293782	952236	Dan Fraga	Дэн Фрага	\N	https://st.kp.yandex.net/images/actor_iphone/iphone360_2293782.jpg	Режиссеры	DIRECTOR
3	111280	952236	Ben Diskin	Бен Дискин	Brandon / Tankard, озвучка	https://st.kp.yandex.net/images/actor_iphone/iphone360_111280.jpg	Актеры	ACTOR
4	6372	952236	Doug Erholtz	Даг Эрхольц	Greasebeard, озвучка	https://st.kp.yandex.net/images/actor_iphone/iphone360_6372.jpg	Актеры	ACTOR
5	39055	952236	Jessica Gee-George	Джессика Ги	Rhett's Mom / Evil Mermaid, озвучка (в титрах: Jessica Gee)	https://st.kp.yandex.net/images/actor_iphone/iphone360_39055.jpg	Актеры	ACTOR
6	262573	952236	Grant George	Грант Джордж	Gage / Mayor / Scurvey, озвучка	https://st.kp.yandex.net/images/actor_iphone/iphone360_262573.jpg	Актеры	ACTOR
7	6373	952236	David Lodge	Дэвид Лодж	Rhett / Gammy Gram / Bill McBoberts / Grog, озвучка	https://st.kp.yandex.net/images/actor_iphone/iphone360_6373.jpg	Актеры	ACTOR
8	24474	952236	Nicolas Roye	Николас Ройе	Wyatt / Longshank, озвучка	https://st.kp.yandex.net/images/actor_iphone/iphone360_24474.jpg	Актеры	ACTOR
9	1219815	952236	Faruq Tauheed	Фарук Тохид	Larry, озвучка	https://st.kp.yandex.net/images/actor_iphone/iphone360_1219815.jpg	Актеры	ACTOR
10	1046899	952236	Margaret M. Dean	Маргарет М. Дин	\N	https://st.kp.yandex.net/images/actor_iphone/iphone360_1046899.jpg	Продюсеры	PRODUCER
11	4271518	952236	Kimberly A. Smith	Кимберли А. Смит	\N	https://st.kp.yandex.net/images/actor_iphone/iphone360_4271518.jpg	Продюсеры	PRODUCER
12	4088404	952236	Shane Amsterdam	Шэйн Амстердам	продюсер-супервайзер	https://st.kp.yandex.net/images/actor_iphone/iphone360_4088404.jpg	Продюсеры	PRODUCER
13	3636382	952236	Kiran Bhakta Joshi	Киран Бхакта Джоши	3D продюсер	https://st.kp.yandex.net/images/actor_iphone/iphone360_3636382.jpg	Продюсеры	PRODUCER
14	273941	952236	Audu Paden	Оду Паден	исполнительный продюсер	https://st.kp.yandex.net/images/actor_iphone/iphone360_273941.jpg	Продюсеры	PRODUCER
15	742630	952236	Kimberly Smith	Кимберли Смит	в титрах: Kimberly A. Smith	https://st.kp.yandex.net/images/actor_iphone/iphone360_742630.jpg	Продюсеры	PRODUCER
16	6249335	952236	David Voss	\N	исполнительный продюсер	https://st.kp.yandex.net/images/actor_iphone/iphone360_6249335.jpg	Продюсеры	PRODUCER
17	3643631	952236	David Voss	Дэвид Восс	исполнительный продюсер	https://st.kp.yandex.net/images/actor_iphone/iphone360_3643631.jpg	Продюсеры	PRODUCER
18	1557417	952236	\N	Илья Хвостиков	\N	https://st.kp.yandex.net/images/actor_iphone/iphone360_1557417.jpg	Режиссеры дубляжа	VOICE_DIRECTOR
19	4274074	952236	\N	Дмитрий Шамшин	\N	https://st.kp.yandex.net/images/actor_iphone/iphone360_4274074.jpg	Переводчики	TRANSLATOR
21	4271515	952236	Scott Hart Derman	\N	история	https://st.kp.yandex.net/images/actor_iphone/iphone360_4271515.jpg	Сценаристы	WRITER
22	227504	952236	Pat Casey	Патрик Кейси	\N	https://st.kp.yandex.net/images/actor_iphone/iphone360_227504.jpg	Сценаристы	WRITER
23	227505	952236	Josh Miller	Джош Миллер	\N	https://st.kp.yandex.net/images/actor_iphone/iphone360_227505.jpg	Сценаристы	WRITER
24	928777	952236	Rebecca Kneubuhl	Бекки Нюбул	\N	https://st.kp.yandex.net/images/actor_iphone/iphone360_928777.jpg	Композиторы	COMPOSER
25	2343050	952236	Linus of Hollywood	Linus of Hollywood	\N	https://st.kp.yandex.net/images/actor_iphone/iphone360_2343050.jpg	Композиторы	COMPOSER
26	1117252	952236	Gabriel Mann	Гэбриел Манн	\N	https://st.kp.yandex.net/images/actor_iphone/iphone360_1117252.jpg	Композиторы	COMPOSER
27	1901307	952236	Haim Mazar	Хаим Мазар	\N	https://st.kp.yandex.net/images/actor_iphone/iphone360_1901307.jpg	Композиторы	COMPOSER
29	2948570	952236	Efraim Klein	Эфраим Клейн	\N	https://st.kp.yandex.net/images/actor_iphone/iphone360_2948570.jpg	Монтажеры	EDITOR
36	10189437	962472	Jackson C. Smith	\N	Kid, озвучка	https://st.kp.yandex.net/images/actor_iphone/iphone360_10189437.jpg	Актеры	ACTOR
40	1604859	962472	\N	Борис Токарев	\N	https://st.kp.yandex.net/images/actor_iphone/iphone360_1604859.jpg	Режиссеры дубляжа	VOICE_DIRECTOR
48	313439	45319	\N	Эдуард Назаров	\N	https://st.kp.yandex.net/images/actor_iphone/iphone360_313439.jpg	Режиссеры	DIRECTOR
49	273102	45319	\N	Георгий Бурков	пес, озвучка	https://st.kp.yandex.net/images/actor_iphone/iphone360_273102.jpg	Актеры	ACTOR
50	127995	45319	\N	Армен Джигарханян	волк, озвучка	https://st.kp.yandex.net/images/actor_iphone/iphone360_127995.jpg	Актеры	ACTOR
52	1769575	45319	\N	Нинель Липницкая	\N	https://st.kp.yandex.net/images/actor_iphone/iphone360_1769575.jpg	Директора фильма	PRODUCER_USSR
54	310675	45319	\N	Михаил Друян	\N	https://st.kp.yandex.net/images/actor_iphone/iphone360_310675.jpg	Операторы	OPERATOR
55	2008666	45319	\N	Алла Горева	\N	https://st.kp.yandex.net/images/actor_iphone/iphone360_2008666.jpg	Художники	DESIGN
57	28762	1339977	Tucker Gates	Такер Гейтс	\N	https://st.kp.yandex.net/images/actor_iphone/iphone360_28762.jpg	Режиссеры	DIRECTOR
58	32312	1339977	Steve Carell	Стив Карелл	Michael Scarn (в титрах: Michael Scott)	https://st.kp.yandex.net/images/actor_iphone/iphone360_32312.jpg	Актеры	ACTOR
59	394931	1339977	John Krasinski	Джон Красински	Goldenface (в титрах: James Halpert)	https://st.kp.yandex.net/images/actor_iphone/iphone360_394931.jpg	Актеры	ACTOR
60	7243	1339977	Rainn Wilson	Рэйн Уилсон	Samuel (в титрах: D.K. Schrute)	https://st.kp.yandex.net/images/actor_iphone/iphone360_7243.jpg	Актеры	ACTOR
61	583874	1339977	Craig Robinson	Крэйг Робинсон	President Jackson (в титрах: Darryl Philbin)	https://st.kp.yandex.net/images/actor_iphone/iphone360_583874.jpg	Актеры	ACTOR
62	12869	1339977	Jenna Fischer	Дженна Фишер	Sandra (в титрах: Pam Beesly)	https://st.kp.yandex.net/images/actor_iphone/iphone360_12869.jpg	Актеры	ACTOR
111	6304340	2500772	\N	Сергей Карпов	\N	https://st.kp.yandex.net/images/actor_iphone/iphone360_6304340.jpg	Режиссеры	DIRECTOR
63	120857	1339977	Creed Bratton	Крид Брэттон	Cherokee Jack (в титрах: Creed Bratton)	https://st.kp.yandex.net/images/actor_iphone/iphone360_120857.jpg	Актеры	ACTOR
64	21657	1339977	Melora Hardin	Мелора Хардин	Jasmine Windsong (в титрах: Jan Levenson)	https://st.kp.yandex.net/images/actor_iphone/iphone360_21657.jpg	Актеры	ACTOR
65	466032	1339977	Ed Helms	Эд Хелмс	Billy the Bartender (в титрах: Andrew Bernard)	https://st.kp.yandex.net/images/actor_iphone/iphone360_466032.jpg	Актеры	ACTOR
66	57755	1339977	Linda Purl	Линда Перл	Sexy Nurse (в титрах: Helen Beesly)	https://st.kp.yandex.net/images/actor_iphone/iphone360_57755.jpg	Актеры	ACTOR
67	1078278	1339977	B.J. Novak	Б.Дж. Новак	Hockey Coach (в титрах: Ryan Howard)	https://st.kp.yandex.net/images/actor_iphone/iphone360_1078278.jpg	Актеры	ACTOR
68	31051	1339977	Oscar Nuñez	Оскар Нуньес	Speed Skater (в титрах: Oscar Martinez)	https://st.kp.yandex.net/images/actor_iphone/iphone360_31051.jpg	Актеры	ACTOR
69	2789	1339977	David Koechner	Дэвид Кокнер	Drunk Man in Bar (в титрах: Todd Packer)	https://st.kp.yandex.net/images/actor_iphone/iphone360_2789.jpg	Актеры	ACTOR
70	1052111	1339977	Noel Petok	Ноэль Петок	Henchman #1 (в титрах: Troy Underbridge)	https://st.kp.yandex.net/images/actor_iphone/iphone360_1052111.jpg	Актеры	ACTOR
71	9558	1339977	David Denman	Дэвид Денман	Hostage #1 (в титрах: Roy Anderson)	https://st.kp.yandex.net/images/actor_iphone/iphone360_9558.jpg	Актеры	ACTOR
72	1096293	1339977	Dan Goor	Дэниэл Дж. Гур	Bar Patron	https://st.kp.yandex.net/images/actor_iphone/iphone360_1096293.jpg	Актеры	ACTOR
73	585865	1339977	Brian Baumgartner	Брайан Баумгартнер	Hostage #2 (в титрах: Kevin Malone)	https://st.kp.yandex.net/images/actor_iphone/iphone360_585865.jpg	Актеры	ACTOR
74	1959782	1339977	Mindy Kaling	Минди Кейлинг	Hostage #3 (в титрах: Kelly Kapoor)	https://st.kp.yandex.net/images/actor_iphone/iphone360_1959782.jpg	Актеры	ACTOR
75	694731	1339977	Paul Lieberstein	Пол Либерштейн	Hostage #4 (в титрах: Toby Flenderson)	https://st.kp.yandex.net/images/actor_iphone/iphone360_694731.jpg	Актеры	ACTOR
76	60929	1339977	Kate Flannery	Кейт Флэннери	Man / Bachelorette #1 (в титрах: Meredith Palmer)	https://st.kp.yandex.net/images/actor_iphone/iphone360_60929.jpg	Актеры	ACTOR
77	45178	1339977	Rashida Jones	Рашида Джонс	Bachelorette #4 (в титрах: Karen Filippelli)	https://st.kp.yandex.net/images/actor_iphone/iphone360_45178.jpg	Актеры	ACTOR
78	725075	1339977	Phyllis Smith	Филлис Смит	Bachelorette #2 (в титрах: Phyllis Vance)	https://st.kp.yandex.net/images/actor_iphone/iphone360_725075.jpg	Актеры	ACTOR
79	541542	1339977	Angela Kinsey	Анджела Кинси	Bachelorette #3 (в титрах: Angela Martin)	https://st.kp.yandex.net/images/actor_iphone/iphone360_541542.jpg	Актеры	ACTOR
80	226085	1339977	Mike Bruner	Майк Брунер	Piano Player (в титрах: Tony Gardner)	https://st.kp.yandex.net/images/actor_iphone/iphone360_226085.jpg	Актеры	ACTOR
81	2652	1339977	Greg Collins	Грег Коллинз	Assassin	https://st.kp.yandex.net/images/actor_iphone/iphone360_2652.jpg	Актеры	ACTOR
82	6178715	1339977	Owen Winkdale	\N	Boy in Bar	https://st.kp.yandex.net/images/actor_iphone/iphone360_6178715.jpg	Актеры	ACTOR
83	565215	1339977	Leslie David Baker	Лесли Дэвид Бэйкер	рассказчик (в титрах: Stanley Hudson)	https://st.kp.yandex.net/images/actor_iphone/iphone360_565215.jpg	Актеры	ACTOR
84	392732	1339977	Lee Eisenberg	Ли Айзенберг	Bar Patron	https://st.kp.yandex.net/images/actor_iphone/iphone360_392732.jpg	Актеры	ACTOR
85	677340	1339977	Hidetoshi Imura	Хидетоши Имура	Bar Patron (в титрах: Hidetoshi Hasagawa)	https://st.kp.yandex.net/images/actor_iphone/iphone360_677340.jpg	Актеры	ACTOR
86	145621	1339977	Karly Rothenberg	Карли Ротенберг	Bar Patron (в титрах: Madge Madsen)	https://st.kp.yandex.net/images/actor_iphone/iphone360_145621.jpg	Актеры	ACTOR
87	1989116	1339977	Shannon Mary Dixon	Шеннон Диксон	Figure Skater	https://st.kp.yandex.net/images/actor_iphone/iphone360_1989116.jpg	Актеры	ACTOR
88	2009535	1339977	Calvin Tenner	Кэлвин Теннер	Bar Patron	https://st.kp.yandex.net/images/actor_iphone/iphone360_2009535.jpg	Актеры	ACTOR
90	542555	1339977	Greg Daniels	Грег Дэниелс	исполнительный продюсер	https://st.kp.yandex.net/images/actor_iphone/iphone360_542555.jpg	Продюсеры	PRODUCER
91	5306	1339977	Ricky Gervais	Рики Джервэйс	исполнительный продюсер	https://st.kp.yandex.net/images/actor_iphone/iphone360_5306.jpg	Продюсеры	PRODUCER
93	1510045	1339977	Howard Klein	Ховард Клейн	исполнительный продюсер	https://st.kp.yandex.net/images/actor_iphone/iphone360_1510045.jpg	Продюсеры	PRODUCER
95	1081481	1339977	Stephen Merchant	Стивен Мерчант	исполнительный продюсер	https://st.kp.yandex.net/images/actor_iphone/iphone360_1081481.jpg	Продюсеры	PRODUCER
97	4541602	1339977	Ben Silverman	Бен Силверман	исполнительный продюсер	https://st.kp.yandex.net/images/actor_iphone/iphone360_4541602.jpg	Продюсеры	PRODUCER
98	1098554	1339977	Justin Spitzer	Джастин Спитцер	продюсер-супервайзер	https://st.kp.yandex.net/images/actor_iphone/iphone360_1098554.jpg	Продюсеры	PRODUCER
103	252809	1339977	Matt Sohn	Мэттью Сон	\N	https://st.kp.yandex.net/images/actor_iphone/iphone360_252809.jpg	Операторы	OPERATOR
105	2009545	1339977	Michael G. Gallenberg	Майкл Дж. Галленберг	постановщик	https://st.kp.yandex.net/images/actor_iphone/iphone360_2009545.jpg	Художники	DESIGN
106	1893098	1339977	Matt Flynn	Мэтт Флинн	\N	https://st.kp.yandex.net/images/actor_iphone/iphone360_1893098.jpg	Художники	DESIGN
107	1989264	1339977	Alysia Raycraft	Алисия Рэйкрафт	по костюмам	https://st.kp.yandex.net/images/actor_iphone/iphone360_1989264.jpg	Художники	DESIGN
108	2004915	1339977	Steve Rostine	Стив Ростайн	по декорациям	https://st.kp.yandex.net/images/actor_iphone/iphone360_2004915.jpg	Художники	DESIGN
109	1891537	1339977	David Rogers	Дэвид Роджерс	\N	https://st.kp.yandex.net/images/actor_iphone/iphone360_1891537.jpg	Монтажеры	EDITOR
110	1742202	1339977	Claire Scanlon	Клер Скэнлон	\N	https://st.kp.yandex.net/images/actor_iphone/iphone360_1742202.jpg	Монтажеры	EDITOR
112	4733765	2500772	\N	Стася Трус	\N	https://st.kp.yandex.net/images/actor_iphone/iphone360_4733765.jpg	Продюсеры	PRODUCER
113	5000340	2500772	\N	Дмитрий Алешковский	генеральный продюсер	https://st.kp.yandex.net/images/actor_iphone/iphone360_5000340.jpg	Продюсеры	PRODUCER
114	5000329	2500772	\N	Галина Мосалова	\N	https://st.kp.yandex.net/images/actor_iphone/iphone360_5000329.jpg	Сценаристы	WRITER
116	3731081	2500772	\N	Кристина Кужахметова	\N	https://st.kp.yandex.net/images/actor_iphone/iphone360_3731081.jpg	Операторы	OPERATOR
117	5782623	2500772	Dmitriy Kuvaldin	Дмитрий Кувалдин	\N	https://st.kp.yandex.net/images/actor_iphone/iphone360_5782623.jpg	Операторы	OPERATOR
118	6328069	2500772	\N	Василий Нефедкин	\N	https://st.kp.yandex.net/images/actor_iphone/iphone360_6328069.jpg	Операторы	OPERATOR
119	3722496	2500772	\N	Руслан Федотов	\N	https://st.kp.yandex.net/images/actor_iphone/iphone360_3722496.jpg	Операторы	OPERATOR
120	5069867	2500772	\N	Филипп Задорожный	\N	https://st.kp.yandex.net/images/actor_iphone/iphone360_5069867.jpg	Операторы	OPERATOR
121	5894799	2500772	\N	Карина Казарян	\N	https://st.kp.yandex.net/images/actor_iphone/iphone360_5894799.jpg	Композиторы	COMPOSER
122	6328062	2500772	\N	Андрей Травников	\N	https://st.kp.yandex.net/images/actor_iphone/iphone360_6328062.jpg	Монтажеры	EDITOR
123	2702754	1003587	Thomas Kail	Томас Каил	\N	https://st.kp.yandex.net/images/actor_iphone/iphone360_2702754.jpg	Режиссеры	DIRECTOR
124	1360865	1003587	Alex Horwitz	Алекс Хорвитц	\N	https://st.kp.yandex.net/images/actor_iphone/iphone360_1360865.jpg	Режиссеры	DIRECTOR
125	1308120	1003587	Lin-Manuel Miranda	Лин-Мануэль Миранда	играет самого себя, хроника	https://st.kp.yandex.net/images/actor_iphone/iphone360_1308120.jpg	Актеры	ACTOR
126	2310944	1003587	Paul Ryan	Пол Райан	играет самого себя	https://st.kp.yandex.net/images/actor_iphone/iphone360_2310944.jpg	Актеры	ACTOR
127	1221698	1003587	Andy Blankenbuehler	Энди Бланкенбуэлер	играет самого себя	https://st.kp.yandex.net/images/actor_iphone/iphone360_1221698.jpg	Актеры	ACTOR
128	2035193	1003587	Ariana DeBose	Ариана Дебоуз	играет самого себя, хроника	https://st.kp.yandex.net/images/actor_iphone/iphone360_2035193.jpg	Актеры	ACTOR
129	3569549	1003587	Daveed Diggs	Давид Диггс	играет самого себя / Marquis de Lafayette / Thomas Jefferson	https://st.kp.yandex.net/images/actor_iphone/iphone360_3569549.jpg	Актеры	ACTOR
130	7229	1003587	Jimmy Fallon	Джимми Фэллон	играет самого себя	https://st.kp.yandex.net/images/actor_iphone/iphone360_7229.jpg	Актеры	ACTOR
131	2702893	1003587	Joanne Freeman	Джоэнн Фриман	играет саму себя	https://st.kp.yandex.net/images/actor_iphone/iphone360_2702893.jpg	Актеры	ACTOR
132	1911896	1003587	Timothy Geithner	Тимоти Гейтнер	играет самого себя	https://st.kp.yandex.net/images/actor_iphone/iphone360_1911896.jpg	Актеры	ACTOR
133	239823	1003587	Renée Elise Goldsberry	Рене Голдсберри	играет саму себя / Angelica Schuyler	https://st.kp.yandex.net/images/actor_iphone/iphone360_239823.jpg	Актеры	ACTOR
134	1452349	1003587	Jonathan Groff	Джонатан Грофф	играет самого себя	https://st.kp.yandex.net/images/actor_iphone/iphone360_1452349.jpg	Актеры	ACTOR
135	3022904	1003587	Javier Muñoz	Хавьер Муньос	Alexander Hamilton	https://st.kp.yandex.net/images/actor_iphone/iphone360_3022904.jpg	Актеры	ACTOR
136	1034952	1003587	Chris Jackson	Кристофер Нил Джексон	играет самого себя / George Washington	https://st.kp.yandex.net/images/actor_iphone/iphone360_1034952.jpg	Актеры	ACTOR
137	2857272	1003587	Jasmine Cephas Jones	Жасмин Сифас Джонс	играет саму себя / Peggy Schuyler / Maria Reynolds	https://st.kp.yandex.net/images/actor_iphone/iphone360_2857272.jpg	Актеры	ACTOR
138	4515373	1003587	Carleigh Bettiol	Карли Беттиоль	Ensemble	https://st.kp.yandex.net/images/actor_iphone/iphone360_4515373.jpg	Актеры	ACTOR
140	3337257	1003587	Andrew Chappelle	Эндрю Чаппелль	Ensemble	https://st.kp.yandex.net/images/actor_iphone/iphone360_3337257.jpg	Актеры	ACTOR
141	4384010	1003587	Alex Lacamoire	Алекс Лакамуар	играет самого себя	https://st.kp.yandex.net/images/actor_iphone/iphone360_4384010.jpg	Актеры	ACTOR
142	4345946	1003587	Alysha Deslorieux	Алиша Делорьё	Ensemble	https://st.kp.yandex.net/images/actor_iphone/iphone360_4345946.jpg	Актеры	ACTOR
143	7105400	1003587	Vanessa Nadal Miranda	\N	играет самого себя, хроника (в титрах: Vanessa Adriana Nadal)	https://st.kp.yandex.net/images/actor_iphone/iphone360_7105400.jpg	Актеры	ACTOR
144	27847	1003587	Nas	Нас	играет самого себя	https://st.kp.yandex.net/images/actor_iphone/iphone360_27847.jpg	Актеры	ACTOR
145	3219558	1003587	Sydney James Harcourt	Сидни Джеймс Харкорт	Ensemble	https://st.kp.yandex.net/images/actor_iphone/iphone360_3219558.jpg	Актеры	ACTOR
146	1235888	1003587	Michelle Obama	Мишель Обама	играет самого себя, хроника	https://st.kp.yandex.net/images/actor_iphone/iphone360_1235888.jpg	Актеры	ACTOR
147	1482740	1003587	Neil Haskell	Нил Хэскелл	Ensemble	https://st.kp.yandex.net/images/actor_iphone/iphone360_1482740.jpg	Актеры	ACTOR
148	1131675	1003587	Leslie Odom Jr.	Лесли Одом мл.	играет самого себя / Aaron Burr	https://st.kp.yandex.net/images/actor_iphone/iphone360_1131675.jpg	Актеры	ACTOR
149	3078218	1003587	Sasha Hutchings	Саша Хатчингс	Ensemble	https://st.kp.yandex.net/images/actor_iphone/iphone360_3078218.jpg	Актеры	ACTOR
150	1107152	1003587	Thayne Jasperson	Тэйн Джесперсон	Ensemble	https://st.kp.yandex.net/images/actor_iphone/iphone360_1107152.jpg	Актеры	ACTOR
151	2279756	1003587	Okieriete Onaodowan	Окьерете Онаодован	играет самого себя	https://st.kp.yandex.net/images/actor_iphone/iphone360_2279756.jpg	Актеры	ACTOR
152	2424977	1003587	Henry Paulson	Генри Полсон	играет самого себя (в титрах: Hank Paulson)	https://st.kp.yandex.net/images/actor_iphone/iphone360_2424977.jpg	Актеры	ACTOR
153	4515374	1003587	Stephanie Klemons	\N	Ensemble	https://st.kp.yandex.net/images/actor_iphone/iphone360_4515374.jpg	Актеры	ACTOR
154	11057	1003587	Questlove	Амир-Халиб Томпсон	играет самого себя (в титрах: Ahmir-Khalib Thompson)	https://st.kp.yandex.net/images/actor_iphone/iphone360_11057.jpg	Актеры	ACTOR
155	2052264	1003587	Morgan Marcell	Морган Марселл	Ensemble	https://st.kp.yandex.net/images/actor_iphone/iphone360_2052264.jpg	Актеры	ACTOR
156	3825086	1003587	Anthony Ramos	Энтони Рамос	играет самого себя / John Laurens / Philip Hamilton	https://st.kp.yandex.net/images/actor_iphone/iphone360_3825086.jpg	Актеры	ACTOR
157	4515375	1003587	Emmy Raver-Lampman	Эмми Рэвер-Лэмпман	Ensemble	https://st.kp.yandex.net/images/actor_iphone/iphone360_4515375.jpg	Актеры	ACTOR
158	604755	1003587	Jeffrey Seller	Джеффри Селер	играет самого себя	https://st.kp.yandex.net/images/actor_iphone/iphone360_604755.jpg	Актеры	ACTOR
159	1799694	1003587	Jonathan Rua	Джонатан Руа	Ensemble	https://st.kp.yandex.net/images/actor_iphone/iphone360_1799694.jpg	Актеры	ACTOR
160	2282305	1003587	Austin Smith	Остин Смит	играет самого себя / Performer	https://st.kp.yandex.net/images/actor_iphone/iphone360_2282305.jpg	Актеры	ACTOR
161	33093	1003587	Stephen Sondheim	Стивен Сондхайм	играет самого себя	https://st.kp.yandex.net/images/actor_iphone/iphone360_33093.jpg	Актеры	ACTOR
162	3673115	1003587	Betsy Struxness	\N	Ensemble	https://st.kp.yandex.net/images/actor_iphone/iphone360_3673115.jpg	Актеры	ACTOR
163	3199203	1003587	Phillipa Soo	Филлипа Су	играет саму себя / Eliza Schuyler Hamilton	https://st.kp.yandex.net/images/actor_iphone/iphone360_3199203.jpg	Актеры	ACTOR
164	1810208	1003587	Ephraim Sykes	Эфраим Сайкес	Ensemble	https://st.kp.yandex.net/images/actor_iphone/iphone360_1810208.jpg	Актеры	ACTOR
165	1086658	1003587	Seth Stewart	Сет Стюарт	играет самого себя, хроника	https://st.kp.yandex.net/images/actor_iphone/iphone360_1086658.jpg	Актеры	ACTOR
166	1429	1003587	Tariq Trotter	Тарик Троттер	играет самого себя	https://st.kp.yandex.net/images/actor_iphone/iphone360_1429.jpg	Актеры	ACTOR
167	3091481	1003587	Voltaire Wade-Green	\N	Ensemble	https://st.kp.yandex.net/images/actor_iphone/iphone360_3091481.jpg	Актеры	ACTOR
168	4515376	1003587	Brandon Victor	\N	Aaron Burr	https://st.kp.yandex.net/images/actor_iphone/iphone360_4515376.jpg	Актеры	ACTOR
169	1095376	1003587	Liz Warren	Лиз Уоррен	играет саму себя	https://st.kp.yandex.net/images/actor_iphone/iphone360_1095376.jpg	Актеры	ACTOR
170	1437626	1003587	Lexi Lawson	Лекси Лосон	Eliza Hamiton	https://st.kp.yandex.net/images/actor_iphone/iphone360_1437626.jpg	Актеры	ACTOR
171	435227	1003587	John Weidman	Джон Вейдман	играет самого себя	https://st.kp.yandex.net/images/actor_iphone/iphone360_435227.jpg	Актеры	ACTOR
172	84166	1003587	Barbra Streisand	Барбра Стрейзанд	играет самого себя, хроника, в титрах не указан	https://st.kp.yandex.net/images/actor_iphone/iphone360_84166.jpg	Актеры	ACTOR
173	455985	1003587	Jill Furman	Джилл Фурман	\N	https://st.kp.yandex.net/images/actor_iphone/iphone360_455985.jpg	Продюсеры	PRODUCER
174	4515377	1003587	Sander Jacobs	\N	\N	https://st.kp.yandex.net/images/actor_iphone/iphone360_4515377.jpg	Продюсеры	PRODUCER
176	1714800	1003587	Nicole Pusateri	Николь Пузатери	\N	https://st.kp.yandex.net/images/actor_iphone/iphone360_1714800.jpg	Продюсеры	PRODUCER
177	3892843	1003587	Elizabeth Garrett	Элизабет Гарретт	линейный продюсер	https://st.kp.yandex.net/images/actor_iphone/iphone360_3892843.jpg	Продюсеры	PRODUCER
178	1046324	1003587	David Horn	Дэвид Хорн	исполнительный продюсер: Великие представления	https://st.kp.yandex.net/images/actor_iphone/iphone360_1046324.jpg	Продюсеры	PRODUCER
179	4515378	1003587	Patrick Willingham	\N	Executive Director	https://st.kp.yandex.net/images/actor_iphone/iphone360_4515378.jpg	Продюсеры	PRODUCER
180	251509	1003587	Jon Kamen	Джон Кеймен	исполнительный продюсер	https://st.kp.yandex.net/images/actor_iphone/iphone360_251509.jpg	Продюсеры	PRODUCER
181	1960984	1003587	Ron Chernow	\N	книга	https://st.kp.yandex.net/images/actor_iphone/iphone360_1960984.jpg	Сценаристы	WRITER
185	1729452	1003587	Bill O'Donnell	Билл О’Доннелл	продюсер серии: Великие представления	https://st.kp.yandex.net/images/actor_iphone/iphone360_1729452.jpg	Продюсеры	PRODUCER
187	2216804	1003587	Paul Tazewell	Пол Тэйзуэлл	по костюмам	https://st.kp.yandex.net/images/actor_iphone/iphone360_2216804.jpg	Художники	DESIGN
188	1135308	1003587	Dave Sirulnick	Дэйв Сирулник	исполнительный продюсер	https://st.kp.yandex.net/images/actor_iphone/iphone360_1135308.jpg	Продюсеры	PRODUCER
189	10188706	1003587	Jenny Turner	\N	внестудийный продюсер	https://st.kp.yandex.net/images/actor_iphone/iphone360_10188706.jpg	Продюсеры	PRODUCER
190	4563727	1003587	James Uminowicz	\N	ассоциированный продюсер	https://st.kp.yandex.net/images/actor_iphone/iphone360_4563727.jpg	Продюсеры	PRODUCER
191	603502	1003587	Justin Wilkes	Джастин Уилкс	исполнительный продюсер	https://st.kp.yandex.net/images/actor_iphone/iphone360_603502.jpg	Продюсеры	PRODUCER
192	3028887	1003587	Bryant Fisher	Брайант Фишер	\N	https://st.kp.yandex.net/images/actor_iphone/iphone360_3028887.jpg	Операторы	OPERATOR
193	2043772	1003587	Brett Mason	Бретт Мэйсон	\N	https://st.kp.yandex.net/images/actor_iphone/iphone360_2043772.jpg	Монтажеры	EDITOR
194	4557254	1111028	Lee Yeong-joon	Ли Ён-джун	\N	https://st.kp.yandex.net/images/actor_iphone/iphone360_4557254.jpg	Режиссеры	DIRECTOR
195	4557401	1111028	Choi In-hee	Чхве Ин-хи	\N	https://st.kp.yandex.net/images/actor_iphone/iphone360_4557401.jpg	Сценаристы	WRITER
196	1235564	2000090	Taylor Swift	Тейлор Свифт	\N	https://st.kp.yandex.net/images/actor_iphone/iphone360_1235564.jpg	Режиссеры	DIRECTOR
198	1668429	2000090	Jack Antonoff	Джек Антонофф	играет самого себя	https://st.kp.yandex.net/images/actor_iphone/iphone360_1668429.jpg	Актеры	ACTOR
199	2335357	2000090	Aaron Dessner	Аарон Десснер	играет самого себя	https://st.kp.yandex.net/images/actor_iphone/iphone360_2335357.jpg	Актеры	ACTOR
200	2561778	2000090	Justin Vernon	Джастин Вернон	играет самого себя	https://st.kp.yandex.net/images/actor_iphone/iphone360_2561778.jpg	Актеры	ACTOR
201	104700	2000090	Robert Allan Ackerman	Робер Аллан Акерман	\N	https://st.kp.yandex.net/images/actor_iphone/iphone360_104700.jpg	Продюсеры	PRODUCER
202	2320978	2000090	Bart Peters	Барт Питерс	\N	https://st.kp.yandex.net/images/actor_iphone/iphone360_2320978.jpg	Продюсеры	PRODUCER
205	5341616	2000090	Jim Jagels	\N	линейный продюсер	https://st.kp.yandex.net/images/actor_iphone/iphone360_5341616.jpg	Продюсеры	PRODUCER
206	5295709	2000090	Ludmila Kmet	\N	ассоциированный продюсер	https://st.kp.yandex.net/images/actor_iphone/iphone360_5295709.jpg	Продюсеры	PRODUCER
207	5935435	2000090	Tree Paine	Три Пейн	исполнительный продюсер	https://st.kp.yandex.net/images/actor_iphone/iphone360_5935435.jpg	Продюсеры	PRODUCER
208	6287225	2000090	Jay Schaudies	\N	исполнительный продюсер	https://st.kp.yandex.net/images/actor_iphone/iphone360_6287225.jpg	Продюсеры	PRODUCER
209	2006343	2000090	Andrea Swift	Андреа Свифт	исполнительный продюсер	https://st.kp.yandex.net/images/actor_iphone/iphone360_2006343.jpg	Продюсеры	PRODUCER
210	3702491	2000090	Austin Swift	Остин Свифт	исполнительный продюсер	https://st.kp.yandex.net/images/actor_iphone/iphone360_3702491.jpg	Продюсеры	PRODUCER
211	964110	2000090	Ethan Palmer	Этан Палмер	\N	https://st.kp.yandex.net/images/actor_iphone/iphone360_964110.jpg	Операторы	OPERATOR
212	2028271	2000090	Laura Randolph	Лаура Чоппин	\N	https://st.kp.yandex.net/images/actor_iphone/iphone360_2028271.jpg	Монтажеры	EDITOR
213	3464325	5332560	\N	Людмила Снигирева	\N	https://st.kp.yandex.net/images/actor_iphone/iphone360_3464325.jpg	Режиссеры	DIRECTOR
214	231512	5332560	\N	Константин Хабенский	\N	https://st.kp.yandex.net/images/actor_iphone/iphone360_231512.jpg	Актеры	ACTOR
215	1193331	5332560	\N	Сергей Бурунов	\N	https://st.kp.yandex.net/images/actor_iphone/iphone360_1193331.jpg	Актеры	ACTOR
216	251015	5332560	\N	Анна Меликян	\N	https://st.kp.yandex.net/images/actor_iphone/iphone360_251015.jpg	Актеры	ACTOR
217	4755301	5332560	\N	Александр Цыпкин	\N	https://st.kp.yandex.net/images/actor_iphone/iphone360_4755301.jpg	Актеры	ACTOR
218	6749965	5332560	\N	Мироника Март	\N	https://st.kp.yandex.net/images/actor_iphone/iphone360_6749965.jpg	Сценаристы	WRITER
219	24262	326	Frank Darabont	Фрэнк Дарабонт	\N	https://st.kp.yandex.net/images/actor_iphone/iphone360_24262.jpg	Режиссеры	DIRECTOR
220	7987	326	Tim Robbins	Тим Роббинс	Andy Dufresne	https://st.kp.yandex.net/images/actor_iphone/iphone360_7987.jpg	Актеры	ACTOR
221	6750	326	Morgan Freeman	Морган Фриман	Ellis Boyd «Red» Redding	https://st.kp.yandex.net/images/actor_iphone/iphone360_6750.jpg	Актеры	ACTOR
222	23481	326	Bob Gunton	Боб Гантон	Warden Norton	https://st.kp.yandex.net/images/actor_iphone/iphone360_23481.jpg	Актеры	ACTOR
223	24267	326	William Sadler	Уильям Сэдлер	Heywood	https://st.kp.yandex.net/images/actor_iphone/iphone360_24267.jpg	Актеры	ACTOR
224	20802	326	Clancy Brown	Клэнси Браун	Captain Hadley	https://st.kp.yandex.net/images/actor_iphone/iphone360_20802.jpg	Актеры	ACTOR
225	8531	326	Gil Bellows	Гил Беллоуз	Tommy	https://st.kp.yandex.net/images/actor_iphone/iphone360_8531.jpg	Актеры	ACTOR
226	47327	326	Mark Rolston	Марк Ролстон	Bogs Diamond	https://st.kp.yandex.net/images/actor_iphone/iphone360_47327.jpg	Актеры	ACTOR
227	50162	326	James Whitmore	Джеймс Уитмор	Brooks Hatlen	https://st.kp.yandex.net/images/actor_iphone/iphone360_50162.jpg	Актеры	ACTOR
228	24264	326	Jeffrey DeMunn	Джеффри ДеМанн	1946 D.A.	https://st.kp.yandex.net/images/actor_iphone/iphone360_24264.jpg	Актеры	ACTOR
229	63758	326	Larry Brandenburg	Ларри Бранденбург	Skeet	https://st.kp.yandex.net/images/actor_iphone/iphone360_63758.jpg	Актеры	ACTOR
230	68803	326	Neil Giuntoli	Нил Джунтоли	Jigger	https://st.kp.yandex.net/images/actor_iphone/iphone360_68803.jpg	Актеры	ACTOR
231	24274	326	Brian Libby	Брайан Либби	Floyd	https://st.kp.yandex.net/images/actor_iphone/iphone360_24274.jpg	Актеры	ACTOR
232	28987	326	David Proval	Дэвид Провал	Snooze	https://st.kp.yandex.net/images/actor_iphone/iphone360_28987.jpg	Актеры	ACTOR
233	56711	326	Joseph Ragno	Джозеф Раньо	Ernie	https://st.kp.yandex.net/images/actor_iphone/iphone360_56711.jpg	Актеры	ACTOR
234	25914	326	Jude Ciccolella	Джуд Чикколелла	Guard Mert	https://st.kp.yandex.net/images/actor_iphone/iphone360_25914.jpg	Актеры	ACTOR
235	7363	326	Paul McCrane	Пол Маккрейн	Guard Trout	https://st.kp.yandex.net/images/actor_iphone/iphone360_7363.jpg	Актеры	ACTOR
236	102273	326	Renee Blaine	Рени Блейн	Andy Dufresne's Wife	https://st.kp.yandex.net/images/actor_iphone/iphone360_102273.jpg	Актеры	ACTOR
237	102274	326	Scott Mann	Скотт Манн	Glenn Quentin	https://st.kp.yandex.net/images/actor_iphone/iphone360_102274.jpg	Актеры	ACTOR
238	75464	326	John Horton	Джон Хортон	1946 Judge	https://st.kp.yandex.net/images/actor_iphone/iphone360_75464.jpg	Актеры	ACTOR
239	1667952	326	Gordon Greene	Гордон Грин	1947 Parole Hearings Man (в титрах: Gordon C. Greene)	https://st.kp.yandex.net/images/actor_iphone/iphone360_1667952.jpg	Актеры	ACTOR
240	6767	326	Alfonso Freeman	Альфонсо Фриман	Fresh Fish Con	https://st.kp.yandex.net/images/actor_iphone/iphone360_6767.jpg	Актеры	ACTOR
241	23749	326	Vincent Foster	В. Дж. Фостер	Hungry Fish Con (в титрах: V.J. Foster)	https://st.kp.yandex.net/images/actor_iphone/iphone360_23749.jpg	Актеры	ACTOR
242	102276	326	John E. Summers	Джон Э. Саммерс	New Fish Guard	https://st.kp.yandex.net/images/actor_iphone/iphone360_102276.jpg	Актеры	ACTOR
243	456918	326	Frank Medrano	Фрэнк Медрано	Fat Ass	https://st.kp.yandex.net/images/actor_iphone/iphone360_456918.jpg	Актеры	ACTOR
244	24268	326	Mack Miles	Мак Майлз	Tyrell	https://st.kp.yandex.net/images/actor_iphone/iphone360_24268.jpg	Актеры	ACTOR
245	102277	326	Alan R. Kessler	Алан Р. Кесслер	Laundry Bob	https://st.kp.yandex.net/images/actor_iphone/iphone360_102277.jpg	Актеры	ACTOR
246	3271	326	Morgan Lund	Морган Ланд	Laundry Truck Driver	https://st.kp.yandex.net/images/actor_iphone/iphone360_3271.jpg	Актеры	ACTOR
247	102278	326	Cornell Wallace	Корнелл Уоллес	Laundry Leonard	https://st.kp.yandex.net/images/actor_iphone/iphone360_102278.jpg	Актеры	ACTOR
248	85810	326	Gary Lee Davis	Гэри Ли Дэвис	Rooster	https://st.kp.yandex.net/images/actor_iphone/iphone360_85810.jpg	Актеры	ACTOR
249	93068	326	Neil Summers	Нил Саммерс	Pete	https://st.kp.yandex.net/images/actor_iphone/iphone360_93068.jpg	Актеры	ACTOR
250	23488	326	Ned Bellamy	Нед Беллами	Guard Youngblood	https://st.kp.yandex.net/images/actor_iphone/iphone360_23488.jpg	Актеры	ACTOR
251	80538	326	Joe Pecoraro	Джо Пекорато	Projectionist (в титрах: Joseph Pecoraro)	https://st.kp.yandex.net/images/actor_iphone/iphone360_80538.jpg	Актеры	ACTOR
252	102279	326	Harold E. Cope Jr.	Харольд Э. Коуп мл.	Hole Guard	https://st.kp.yandex.net/images/actor_iphone/iphone360_102279.jpg	Актеры	ACTOR
253	3470	326	Brian Delate	Брайан Дилейт	Guard Dekins	https://st.kp.yandex.net/images/actor_iphone/iphone360_3470.jpg	Актеры	ACTOR
254	6277	326	Don McManus	Дон Макманус	Guard Wiley (в титрах: Don R. McManus)	https://st.kp.yandex.net/images/actor_iphone/iphone360_6277.jpg	Актеры	ACTOR
255	102280	326	Donald Zinn	Дональд Зинн	Moresby Batter (в титрах: Donald E. Zinn)	https://st.kp.yandex.net/images/actor_iphone/iphone360_102280.jpg	Актеры	ACTOR
256	36269	326	Dorothy Silver	Дороти Сильвер	1954 Landlady	https://st.kp.yandex.net/images/actor_iphone/iphone360_36269.jpg	Актеры	ACTOR
257	102281	326	Robert Haley	Роберт Хейли	1954 Food-Way Manager	https://st.kp.yandex.net/images/actor_iphone/iphone360_102281.jpg	Актеры	ACTOR
258	102282	326	Dana Snyder	Дэна Снайдер	1954 Food-Way Woman	https://st.kp.yandex.net/images/actor_iphone/iphone360_102282.jpg	Актеры	ACTOR
259	102283	326	John D. Craig	Джон Д. Крэйг	1957 Parole Hearings Man	https://st.kp.yandex.net/images/actor_iphone/iphone360_102283.jpg	Актеры	ACTOR
260	23042	326	Ken Magee	Кен Маджи	Ned Grimes	https://st.kp.yandex.net/images/actor_iphone/iphone360_23042.jpg	Актеры	ACTOR
261	3331347	326	Eugene C. DePasquale	Юджин С. ДеПаскуале	Mail Caller (в титрах: Eugene C. De Pasquale)	https://st.kp.yandex.net/images/actor_iphone/iphone360_3331347.jpg	Актеры	ACTOR
262	27563	326	Bill Bolender	Билл Болендер	Elmo Blatch	https://st.kp.yandex.net/images/actor_iphone/iphone360_27563.jpg	Актеры	ACTOR
263	98379	326	Ron Newell	Рон Ньюэлл	Elderly Hole Guard	https://st.kp.yandex.net/images/actor_iphone/iphone360_98379.jpg	Актеры	ACTOR
264	102285	326	John R. Woodward	Джон Р. Вудворд	Bullhorn Tower Guard	https://st.kp.yandex.net/images/actor_iphone/iphone360_102285.jpg	Актеры	ACTOR
265	102286	326	Chuck Brauchler	Чак Браухлер	Man Missing Guard	https://st.kp.yandex.net/images/actor_iphone/iphone360_102286.jpg	Актеры	ACTOR
266	39088	326	Dion Anderson	Дион Андерсон	Head Bull Haig	https://st.kp.yandex.net/images/actor_iphone/iphone360_39088.jpg	Актеры	ACTOR
267	58052	326	Claire Slemmer	Клер Слеммер	Bank Teller	https://st.kp.yandex.net/images/actor_iphone/iphone360_58052.jpg	Актеры	ACTOR
268	10118	326	James Kisicki	Джеймс Кисики	Bank Manager	https://st.kp.yandex.net/images/actor_iphone/iphone360_10118.jpg	Актеры	ACTOR
269	36255	326	Rohn Thomas	Рон Томас	Bugle Editor	https://st.kp.yandex.net/images/actor_iphone/iphone360_36255.jpg	Актеры	ACTOR
270	102287	326	Charlie Kearns	Чарли Кернс	1966 D.A.	https://st.kp.yandex.net/images/actor_iphone/iphone360_102287.jpg	Актеры	ACTOR
271	102288	326	Rob Reider	Роб Рейдер	Duty Guard	https://st.kp.yandex.net/images/actor_iphone/iphone360_102288.jpg	Актеры	ACTOR
272	12710	326	Brian Brophy	Брайан Брофи	1967 Parole Hearings Man	https://st.kp.yandex.net/images/actor_iphone/iphone360_12710.jpg	Актеры	ACTOR
273	34895	326	Paul Kennedy	Пол Кеннеди	1967 Food-Way Manager	https://st.kp.yandex.net/images/actor_iphone/iphone360_34895.jpg	Актеры	ACTOR
274	29752	326	James Babson	Джеймс Бэбсон	Con, в титрах не указан	https://st.kp.yandex.net/images/actor_iphone/iphone360_29752.jpg	Актеры	ACTOR
275	1104241	326	Dennis Baker	Дэннис Бэйкер	Old Man on Bus, в титрах не указан	https://st.kp.yandex.net/images/actor_iphone/iphone360_1104241.jpg	Актеры	ACTOR
276	1866638	326	Fred Culbertson	Фред Калбертсон	Police Officer, в титрах не указан	https://st.kp.yandex.net/images/actor_iphone/iphone360_1866638.jpg	Актеры	ACTOR
277	27846	326	Richard Doone	Ричард Дун	Con, в титрах не указан	https://st.kp.yandex.net/images/actor_iphone/iphone360_27846.jpg	Актеры	ACTOR
278	5930003	326	Samantha Goldberg	\N	Bank Employee, в титрах не указан	https://st.kp.yandex.net/images/actor_iphone/iphone360_5930003.jpg	Актеры	ACTOR
279	5389735	326	Shane Grove	\N	Inmate, в титрах не указан	https://st.kp.yandex.net/images/actor_iphone/iphone360_5389735.jpg	Актеры	ACTOR
280	106173	326	Rita Hayworth	Рита Хэйворт	Gilda Mundson Farrell, хроника, в титрах не указан	https://st.kp.yandex.net/images/actor_iphone/iphone360_106173.jpg	Актеры	ACTOR
281	102289	326	David Hecht	Дэвид Хехт	Bank Teller, в титрах не указан	https://st.kp.yandex.net/images/actor_iphone/iphone360_102289.jpg	Актеры	ACTOR
282	2717561	326	Brad Jacobowitz	Брэд Якобовитц	Pedestrian, в титрах не указан	https://st.kp.yandex.net/images/actor_iphone/iphone360_2717561.jpg	Актеры	ACTOR
283	33144	326	Alonzo F. Jones	Алонсо Ф. Джонс	Inmate, в титрах не указан	https://st.kp.yandex.net/images/actor_iphone/iphone360_33144.jpg	Актеры	ACTOR
284	3422395	326	Gary Jones	Гари Джонс	Convict, в титрах не указан	https://st.kp.yandex.net/images/actor_iphone/iphone360_3422395.jpg	Актеры	ACTOR
285	456211	326	Sergio Kato	Сержиу Като	Inmate II, в титрах не указан	https://st.kp.yandex.net/images/actor_iphone/iphone360_456211.jpg	Актеры	ACTOR
286	37935	326	Michael Lightsey	Майкл Лайтси	Con, в титрах не указан	https://st.kp.yandex.net/images/actor_iphone/iphone360_37935.jpg	Актеры	ACTOR
333	24273	435	Bailey Drucker	Бэйли Дракер	Cora Detterick	https://st.kp.yandex.net/images/actor_iphone/iphone360_24273.jpg	Актеры	ACTOR
287	186862	326	George Macready	Джордж Макреди	Ballin Mundson, хроника, в титрах не указан	https://st.kp.yandex.net/images/actor_iphone/iphone360_186862.jpg	Актеры	ACTOR
288	3490100	326	Christopher Page	Крис Пейдж	Traffic (driver), в титрах не указан	https://st.kp.yandex.net/images/actor_iphone/iphone360_3490100.jpg	Актеры	ACTOR
289	4024080	326	Neil Riddaway	Нил Ридэуэй	Con, в титрах не указан	https://st.kp.yandex.net/images/actor_iphone/iphone360_4024080.jpg	Актеры	ACTOR
290	79727	326	Brad Spencer	Брэд Спенсер	1957 Parole Hearings Guard, в титрах не указан	https://st.kp.yandex.net/images/actor_iphone/iphone360_79727.jpg	Актеры	ACTOR
291	102291	326	Jodiviah Stepp	Джодива Степп	New Fish Con, в титрах не указан	https://st.kp.yandex.net/images/actor_iphone/iphone360_102291.jpg	Актеры	ACTOR
292	5651390	326	Mark A. Strain	\N	Yard Inmate, в титрах не указан	https://st.kp.yandex.net/images/actor_iphone/iphone360_5651390.jpg	Актеры	ACTOR
293	102292	326	Liz Glotzer	Лиз Глоцер	исполнительный продюсер	https://st.kp.yandex.net/images/actor_iphone/iphone360_102292.jpg	Продюсеры	PRODUCER
294	25906	326	David V. Lester	Дэвид В. Лестер	исполнительный продюсер	https://st.kp.yandex.net/images/actor_iphone/iphone360_25906.jpg	Продюсеры	PRODUCER
295	102293	326	Niki Marvin	Ники Марвин	продюсер (produced by)	https://st.kp.yandex.net/images/actor_iphone/iphone360_102293.jpg	Продюсеры	PRODUCER
296	1781077	326	\N	Диомид Виноградов	Sony Turbo	https://st.kp.yandex.net/images/actor_iphone/iphone360_1781077.jpg	Режиссеры дубляжа	VOICE_DIRECTOR
297	6507406	326	\N	Андрей Абакумов	IVI	https://st.kp.yandex.net/images/actor_iphone/iphone360_6507406.jpg	Режиссеры дубляжа	VOICE_DIRECTOR
298	4521580	326	\N	Михаил Ягодкин	IVI	https://st.kp.yandex.net/images/actor_iphone/iphone360_4521580.jpg	Переводчики	TRANSLATOR
299	24263	326	Stephen King	Стивен Кинг	роман	https://st.kp.yandex.net/images/actor_iphone/iphone360_24263.jpg	Сценаристы	WRITER
301	258609	326	Roger Deakins	Роджер Дикинс	\N	https://st.kp.yandex.net/images/actor_iphone/iphone360_258609.jpg	Операторы	OPERATOR
302	608629	326	Thomas Newman	Томас Ньюман	\N	https://st.kp.yandex.net/images/actor_iphone/iphone360_608629.jpg	Композиторы	COMPOSER
303	137866	326	Terence Marsh	Теренс Марш	постановщик	https://st.kp.yandex.net/images/actor_iphone/iphone360_137866.jpg	Художники	DESIGN
304	5838509	326	Soheil	\N	постановщик	https://st.kp.yandex.net/images/actor_iphone/iphone360_5838509.jpg	Художники	DESIGN
305	1998853	326	Peter Landsdown Smith	Питер Лэндсдаун Смит	\N	https://st.kp.yandex.net/images/actor_iphone/iphone360_1998853.jpg	Художники	DESIGN
306	1999152	326	Elizabeth McBride	Элизабет МакБрайд	по костюмам	https://st.kp.yandex.net/images/actor_iphone/iphone360_1999152.jpg	Художники	DESIGN
307	1997462	326	Michael Seirton	Майкл Сейртон	по декорациям	https://st.kp.yandex.net/images/actor_iphone/iphone360_1997462.jpg	Художники	DESIGN
308	2064405	326	Michael Seirton	\N	по декорациям	https://st.kp.yandex.net/images/actor_iphone/iphone360_2064405.jpg	Художники	DESIGN
309	1986116	326	Richard Francis-Bruce	Ричард Фрэнсис-Брюс	\N	https://st.kp.yandex.net/images/actor_iphone/iphone360_1986116.jpg	Монтажеры	EDITOR
311	9144	435	Tom Hanks	Том Хэнкс	Paul Edgecomb	https://st.kp.yandex.net/images/actor_iphone/iphone360_9144.jpg	Актеры	ACTOR
312	12759	435	David Morse	Дэвид Морс	Brutus «Brutal» Howell	https://st.kp.yandex.net/images/actor_iphone/iphone360_12759.jpg	Актеры	ACTOR
313	22527	435	Bonnie Hunt	Бонни Хант	Jan Edgecomb	https://st.kp.yandex.net/images/actor_iphone/iphone360_22527.jpg	Актеры	ACTOR
314	677	435	Michael Clarke Duncan	Майкл Кларк Дункан	John Coffey	https://st.kp.yandex.net/images/actor_iphone/iphone360_677.jpg	Актеры	ACTOR
315	20664	435	James Cromwell	Джеймс Кромуэлл	Warden Hal Moores	https://st.kp.yandex.net/images/actor_iphone/iphone360_20664.jpg	Актеры	ACTOR
316	8989	435	Michael Jeter	Майкл Джитер	Eduard Delacroix	https://st.kp.yandex.net/images/actor_iphone/iphone360_8989.jpg	Актеры	ACTOR
317	1130	435	Graham Greene	Грэм Грин	Arlen Bitterbuck	https://st.kp.yandex.net/images/actor_iphone/iphone360_1130.jpg	Актеры	ACTOR
318	12761	435	Doug Hutchison	Даг Хатчисон	Percy Wetmore	https://st.kp.yandex.net/images/actor_iphone/iphone360_12761.jpg	Актеры	ACTOR
319	21496	435	Sam Rockwell	Сэм Рокуэлл	«Wild Bill» Wharton	https://st.kp.yandex.net/images/actor_iphone/iphone360_21496.jpg	Актеры	ACTOR
320	7370	435	Barry Pepper	Барри Пеппер	Dean Stanton	https://st.kp.yandex.net/images/actor_iphone/iphone360_7370.jpg	Актеры	ACTOR
322	3420	435	Patricia Clarkson	Патриша Кларксон	Melinda Moores	https://st.kp.yandex.net/images/actor_iphone/iphone360_3420.jpg	Актеры	ACTOR
323	22209	435	Harry Dean Stanton	Гарри Дин Стэнтон	Toot-Toot	https://st.kp.yandex.net/images/actor_iphone/iphone360_22209.jpg	Актеры	ACTOR
324	24265	435	Dabbs Greer	Даббс Грир	Old Paul Edgecomb	https://st.kp.yandex.net/images/actor_iphone/iphone360_24265.jpg	Актеры	ACTOR
325	24266	435	Eve Brent	Ив Брент	Elaine Connelly	https://st.kp.yandex.net/images/actor_iphone/iphone360_24266.jpg	Актеры	ACTOR
328	24269	435	Rai Tasco	Рай Таско	Man in Nursing Home	https://st.kp.yandex.net/images/actor_iphone/iphone360_24269.jpg	Актеры	ACTOR
329	24270	435	Edrie Warner	Эдри Уорнер	Lady in Nursing Home	https://st.kp.yandex.net/images/actor_iphone/iphone360_24270.jpg	Актеры	ACTOR
330	10082	435	Paula Malcomson	Паула Малкомсон	Marjorie Detterick	https://st.kp.yandex.net/images/actor_iphone/iphone360_10082.jpg	Актеры	ACTOR
331	24271	435	Christopher Joel Ives	Кристофер Джоэль Айвз	Howie Detterick (в титрах: Christopher Ives)	https://st.kp.yandex.net/images/actor_iphone/iphone360_24271.jpg	Актеры	ACTOR
332	24272	435	Evanne Drucker	Эванн Драклер	Kathe Detterick	https://st.kp.yandex.net/images/actor_iphone/iphone360_24272.jpg	Актеры	ACTOR
335	13487	435	Brent Briscoe	Брент Бриско	Bill Dodge	https://st.kp.yandex.net/images/actor_iphone/iphone360_13487.jpg	Актеры	ACTOR
336	24275	435	Bill McKinney	Билл МакКинни	Jack Van Hay	https://st.kp.yandex.net/images/actor_iphone/iphone360_24275.jpg	Актеры	ACTOR
337	3100	435	Gary Sinise	Гэри Синиз	Burt Hammersmith	https://st.kp.yandex.net/images/actor_iphone/iphone360_3100.jpg	Актеры	ACTOR
338	24276	435	Rachel Singer	Рэйчел Сингер	Cynthia Hammersmith	https://st.kp.yandex.net/images/actor_iphone/iphone360_24276.jpg	Актеры	ACTOR
339	24277	435	Scotty Leavenworth	Скотти Левенуорф	Hammersmith's Son	https://st.kp.yandex.net/images/actor_iphone/iphone360_24277.jpg	Актеры	ACTOR
340	24278	435	Katelyn Leavenworth	Кэтлин Левенуорф	Hammersmith's Daughter	https://st.kp.yandex.net/images/actor_iphone/iphone360_24278.jpg	Актеры	ACTOR
341	15235	435	Bill Gratton	Билл Грэттон	Earl the Plumber	https://st.kp.yandex.net/images/actor_iphone/iphone360_15235.jpg	Актеры	ACTOR
342	24279	435	Dee Croxton	Ди Крокстон	Woman at Del's Execution	https://st.kp.yandex.net/images/actor_iphone/iphone360_24279.jpg	Актеры	ACTOR
343	660035	435	Rebecca Klingler	Ребекка Клингер	Wife at Del's Execution	https://st.kp.yandex.net/images/actor_iphone/iphone360_660035.jpg	Актеры	ACTOR
344	24280	435	Gary Imhoff	Гари Имхофф	Husband at Del's Execution	https://st.kp.yandex.net/images/actor_iphone/iphone360_24280.jpg	Актеры	ACTOR
345	20718	435	Van Epperson	Ван Эпперсон	Police Officer	https://st.kp.yandex.net/images/actor_iphone/iphone360_20718.jpg	Актеры	ACTOR
346	24281	435	David E. Browning	Дэвид Э. Браунинг	Reverend at Funeral (в титрах: Reverend David E. Browning)	https://st.kp.yandex.net/images/actor_iphone/iphone360_24281.jpg	Актеры	ACTOR
347	154895	435	Fred Astaire	Фред Астер	actor in «Top Hat», хроника, в титрах не указан	https://st.kp.yandex.net/images/actor_iphone/iphone360_154895.jpg	Актеры	ACTOR
348	724791	435	Tommy Barnes	Томми Барнс	Tower Guard, в титрах не указан	https://st.kp.yandex.net/images/actor_iphone/iphone360_724791.jpg	Актеры	ACTOR
349	1967572	435	Bill Craddock	Билл Крэддок	Inmate, в титрах не указан	https://st.kp.yandex.net/images/actor_iphone/iphone360_1967572.jpg	Актеры	ACTOR
350	1586213	435	Christopher Greenwood	Кристофер Гринвуд	Prison Guard, в титрах не указан	https://st.kp.yandex.net/images/actor_iphone/iphone360_1586213.jpg	Актеры	ACTOR
351	1451292	435	Rev. Wes Hall	Уэс Холл	Prisoner, в титрах не указан	https://st.kp.yandex.net/images/actor_iphone/iphone360_1451292.jpg	Актеры	ACTOR
352	967709	435	Daniel D. Harris	Дэниэл Д. Харрис	Prison Minister, в титрах не указан	https://st.kp.yandex.net/images/actor_iphone/iphone360_967709.jpg	Актеры	ACTOR
353	356	435	Phil Hawn	Фил Хоун	Police Photographer, в титрах не указан	https://st.kp.yandex.net/images/actor_iphone/iphone360_356.jpg	Актеры	ACTOR
354	25974	435	Mark Heenehan	Марк Хинеан	Guard, в титрах не указан	https://st.kp.yandex.net/images/actor_iphone/iphone360_25974.jpg	Актеры	ACTOR
355	1451	435	Jude Herrera	Джуди Херрера	Bitterbuck's Daughter, в титрах не указан	https://st.kp.yandex.net/images/actor_iphone/iphone360_1451.jpg	Актеры	ACTOR
356	736956	435	Ted Hollis	Тед Холлис	Coffey Execution Witness, в титрах не указан	https://st.kp.yandex.net/images/actor_iphone/iphone360_736956.jpg	Актеры	ACTOR
357	379898	435	Don Langley	Дон Лэнгли	Posse Member, в титрах не указан	https://st.kp.yandex.net/images/actor_iphone/iphone360_379898.jpg	Актеры	ACTOR
358	751695	435	Robert Malone	Роберт Мэлоун	Tower Guard, в титрах не указан	https://st.kp.yandex.net/images/actor_iphone/iphone360_751695.jpg	Актеры	ACTOR
359	4321465	435	Arnold Montey	Арнольд Монти	Prison Guard, в титрах не указан	https://st.kp.yandex.net/images/actor_iphone/iphone360_4321465.jpg	Актеры	ACTOR
360	154905	435	Ginger Rogers	Джинджер Роджерс	Actress in «Top Hat», хроника, в титрах не указан	https://st.kp.yandex.net/images/actor_iphone/iphone360_154905.jpg	Актеры	ACTOR
361	152828	435	Garth Shaw	Гарт Шоу	Inmate, в титрах не указан	https://st.kp.yandex.net/images/actor_iphone/iphone360_152828.jpg	Актеры	ACTOR
362	677263	435	Tim Smith	Тим Смит	Member of the Posse, в титрах не указан	https://st.kp.yandex.net/images/actor_iphone/iphone360_677263.jpg	Актеры	ACTOR
363	591747	435	Toy Spears	Той Спирс	Banker Posse Member, в титрах не указан	https://st.kp.yandex.net/images/actor_iphone/iphone360_591747.jpg	Актеры	ACTOR
364	3889715	435	Jared Stovall	Джаред Стовэлл	Inmate, в титрах не указан	https://st.kp.yandex.net/images/actor_iphone/iphone360_3889715.jpg	Актеры	ACTOR
365	1670063	435	Dora Tate	Дора Тейт	Mourner, в титрах не указан	https://st.kp.yandex.net/images/actor_iphone/iphone360_1670063.jpg	Актеры	ACTOR
366	1670066	435	Samual Tate	Сэмюэл Тейт	Mourner, в титрах не указан	https://st.kp.yandex.net/images/actor_iphone/iphone360_1670066.jpg	Актеры	ACTOR
367	3483	435	Todd Thompson	Тодд Томпсон	Prison Guard, в титрах не указан	https://st.kp.yandex.net/images/actor_iphone/iphone360_3483.jpg	Актеры	ACTOR
368	24282	435	James Marshall Wolchok	Джеймс Маршалл Волчок	Prison Guard, в титрах не указан	https://st.kp.yandex.net/images/actor_iphone/iphone360_24282.jpg	Актеры	ACTOR
370	24283	435	David Valdes	Дэвид Валдес	продюсер (produced by)	https://st.kp.yandex.net/images/actor_iphone/iphone360_24283.jpg	Продюсеры	PRODUCER
371	290494	435	\N	Леонид Белозорович	\N	https://st.kp.yandex.net/images/actor_iphone/iphone360_290494.jpg	Режиссеры дубляжа	VOICE_DIRECTOR
374	609246	435	David Tattersall	Дэвид Тэттерсолл	\N	https://st.kp.yandex.net/images/actor_iphone/iphone360_609246.jpg	Операторы	OPERATOR
377	1999763	435	William Cruse	Уильям Крус	\N	https://st.kp.yandex.net/images/actor_iphone/iphone360_1999763.jpg	Художники	DESIGN
378	1107287	435	Karyn Wagner	Керин Вагнер	по костюмам	https://st.kp.yandex.net/images/actor_iphone/iphone360_1107287.jpg	Художники	DESIGN
382	1192210	1101316	Karen J. Lloyd	Карен Дж. Ллойд	\N	https://st.kp.yandex.net/images/actor_iphone/iphone360_1192210.jpg	Режиссеры	DIRECTOR
383	1807326	1101316	Sabrina Pitre	Сабрина Питре	Patter Peacock, озвучка	https://st.kp.yandex.net/images/actor_iphone/iphone360_1807326.jpg	Актеры	ACTOR
384	1077970	1101316	Rebecca Shoichet	Ребекка Шойкет	Sage Skunk / Caper Skunk / Bren Bear / Bear Bestie / Preena Penguin / Jayla Penguin, озвучка	https://st.kp.yandex.net/images/actor_iphone/iphone360_1077970.jpg	Актеры	ACTOR
385	2289078	1101316	Diana Kaarina	Диана Каарина	Danessa Deer, озвучка	https://st.kp.yandex.net/images/actor_iphone/iphone360_2289078.jpg	Актеры	ACTOR
386	915814	1101316	Maryke Hendrikse	Марика Хендрикс	Bree Bunny / Twist Bunny, озвучка	https://st.kp.yandex.net/images/actor_iphone/iphone360_915814.jpg	Актеры	ACTOR
387	124437	1101316	Sam Vincent	Сэм Винсент	Sprint Deer, озвучка	https://st.kp.yandex.net/images/actor_iphone/iphone360_124437.jpg	Актеры	ACTOR
389	4270641	1101316	Brooklyn Stevenett	Бруклин Стивнетт	Bree Bunny	https://st.kp.yandex.net/images/actor_iphone/iphone360_4270641.jpg	Актеры	ACTOR
390	3942409	1101316	Christopher Keenan	Кристофер Кинэн	исполнительный продюсер	https://st.kp.yandex.net/images/actor_iphone/iphone360_3942409.jpg	Продюсеры	PRODUCER
391	4929074	1101316	Caroline Lagrange	Кэролайн Лагранж	линейный продюсер	https://st.kp.yandex.net/images/actor_iphone/iphone360_4929074.jpg	Продюсеры	PRODUCER
392	1005745	1101316	Jason Netter	Джейсон Неттер	исполнительный продюсер	https://st.kp.yandex.net/images/actor_iphone/iphone360_1005745.jpg	Продюсеры	PRODUCER
393	2957553	1101316	Heather Puttock	Хезер Патток	исполнительный продюсер	https://st.kp.yandex.net/images/actor_iphone/iphone360_2957553.jpg	Продюсеры	PRODUCER
394	120384	1101316	Lynne Southerland	Линн Саузерленд	продюсер-супервайзер	https://st.kp.yandex.net/images/actor_iphone/iphone360_120384.jpg	Продюсеры	PRODUCER
395	3159548	1101316	Jamie Turner	Джэми Тернер	линейный продюсер	https://st.kp.yandex.net/images/actor_iphone/iphone360_3159548.jpg	Продюсеры	PRODUCER
396	2350934	1101316	Keith Wagner	Кит Вагнер	\N	https://st.kp.yandex.net/images/actor_iphone/iphone360_2350934.jpg	Сценаристы	WRITER
397	1046898	1101316	Douglas Wood	Дуглас Вуд	\N	https://st.kp.yandex.net/images/actor_iphone/iphone360_1046898.jpg	Сценаристы	WRITER
398	620759	1101316	Jim Latham	Джим Лэтэм	\N	https://st.kp.yandex.net/images/actor_iphone/iphone360_620759.jpg	Композиторы	COMPOSER
399	3692666	1101316	Byron Leboe	Байрон Лебоу	\N	https://st.kp.yandex.net/images/actor_iphone/iphone360_3692666.jpg	Художники	DESIGN
400	4929075	1101316	Peach Mork	Пич Морк	\N	https://st.kp.yandex.net/images/actor_iphone/iphone360_4929075.jpg	Художники	DESIGN
401	2596139	1101316	Zachary KerrHolden	Захари Керр	\N	https://st.kp.yandex.net/images/actor_iphone/iphone360_2596139.jpg	Монтажеры	EDITOR
402	3920062	1101247	Daniel Schmidt	\N	\N	https://st.kp.yandex.net/images/actor_iphone/iphone360_3920062.jpg	Режиссеры	DIRECTOR
405	5139856	1101247	Tanya Mahar	\N	\N	https://st.kp.yandex.net/images/actor_iphone/iphone360_5139856.jpg	Сценаристы	WRITER
407	42367	734128	Ian Somerhalder	Иэн Сомерхолдер	Agent Truman Black	https://st.kp.yandex.net/images/actor_iphone/iphone360_42367.jpg	Актеры	ACTOR
408	3563	734128	Seymour Cassel	Сеймур Кэссел	Boris Esla	https://st.kp.yandex.net/images/actor_iphone/iphone360_3563.jpg	Актеры	ACTOR
409	1542396	734128	Robert Sisko	Роберт Сиско	Robert Richardson	https://st.kp.yandex.net/images/actor_iphone/iphone360_1542396.jpg	Актеры	ACTOR
410	1669586	734128	Xian Mikol	Сянь Микол	Vera Catina	https://st.kp.yandex.net/images/actor_iphone/iphone360_1669586.jpg	Актеры	ACTOR
411	2240699	734128	Denis O'Mahoney	Дэнис О’Мэхони	Levi Hawkins	https://st.kp.yandex.net/images/actor_iphone/iphone360_2240699.jpg	Актеры	ACTOR
412	2233149	734128	Lee Soo-yeon	Ли Су-ён	Monica Li	https://st.kp.yandex.net/images/actor_iphone/iphone360_2233149.jpg	Актеры	ACTOR
413	466149	734128	Kyle Newman	Кайл Ньюман	Carson Lynch	https://st.kp.yandex.net/images/actor_iphone/iphone360_466149.jpg	Актеры	ACTOR
414	1538338	734128	John Torbett	Джон Торбетт	Wyatt Banks	https://st.kp.yandex.net/images/actor_iphone/iphone360_1538338.jpg	Актеры	ACTOR
415	1908307	734128	Banks Boutte	Бэнкс Бутте	Valet Guy	https://st.kp.yandex.net/images/actor_iphone/iphone360_1908307.jpg	Актеры	ACTOR
416	1669173	734128	Erik Soderbergh	Эрик Содерберг	Security	https://st.kp.yandex.net/images/actor_iphone/iphone360_1669173.jpg	Актеры	ACTOR
417	2291432	734128	Jim Goldstein	Джим Голдштейн	Brett Charleston	https://st.kp.yandex.net/images/actor_iphone/iphone360_2291432.jpg	Актеры	ACTOR
418	2323015	734128	Amra Silajdzic	Амра Силайджич	Cocktail Waitress	https://st.kp.yandex.net/images/actor_iphone/iphone360_2323015.jpg	Актеры	ACTOR
419	3349311	734128	Franki Holton	\N	Party Photographer	https://st.kp.yandex.net/images/actor_iphone/iphone360_3349311.jpg	Актеры	ACTOR
420	3211620	734128	Kristi Dunn	\N	Party Attendee (в титрах: Kristi Dunn)	https://st.kp.yandex.net/images/actor_iphone/iphone360_3211620.jpg	Актеры	ACTOR
421	3211621	734128	Isabelle Wright	\N	Party Attendee	https://st.kp.yandex.net/images/actor_iphone/iphone360_3211621.jpg	Актеры	ACTOR
422	3211622	734128	Christopher Boas	\N	Party Attendee	https://st.kp.yandex.net/images/actor_iphone/iphone360_3211622.jpg	Актеры	ACTOR
423	3211623	734128	Christina Schmotolocha	\N	Party Attendee	https://st.kp.yandex.net/images/actor_iphone/iphone360_3211623.jpg	Актеры	ACTOR
424	3161595	734128	Kate Amundsen	Кейт Амундсен	Party Goer	https://st.kp.yandex.net/images/actor_iphone/iphone360_3161595.jpg	Актеры	ACTOR
425	247613	734128	Nikolett Barabas	Николет Барабаш	Featured Party Attendee	https://st.kp.yandex.net/images/actor_iphone/iphone360_247613.jpg	Актеры	ACTOR
426	3211624	734128	Megan Behnke	\N	Party Attendee	https://st.kp.yandex.net/images/actor_iphone/iphone360_3211624.jpg	Актеры	ACTOR
427	1919231	734128	Evangelo Bousis	Эванджело Бусис	Featured Party Attendee	https://st.kp.yandex.net/images/actor_iphone/iphone360_1919231.jpg	Актеры	ACTOR
428	3211625	734128	Zoe Crook	\N	Party Attendee	https://st.kp.yandex.net/images/actor_iphone/iphone360_3211625.jpg	Актеры	ACTOR
429	3211626	734128	John Damiani	\N	Party Attendee	https://st.kp.yandex.net/images/actor_iphone/iphone360_3211626.jpg	Актеры	ACTOR
430	3211627	734128	Aj English	\N	Party Attendee (в титрах: Andrew James English)	https://st.kp.yandex.net/images/actor_iphone/iphone360_3211627.jpg	Актеры	ACTOR
431	2975633	734128	Elle Evans	Элль Эванс	Party Attendee	https://st.kp.yandex.net/images/actor_iphone/iphone360_2975633.jpg	Актеры	ACTOR
432	3383878	734128	Elisabeth Ferrara	Элизабет Феррара	Party Attendee (в титрах: Elizabeth Twaits)	https://st.kp.yandex.net/images/actor_iphone/iphone360_3383878.jpg	Актеры	ACTOR
433	1163057	734128	Mark C. Hanson	Марк С. Хэнсон	Newscaster (в титрах: Mark Hanson)	https://st.kp.yandex.net/images/actor_iphone/iphone360_1163057.jpg	Актеры	ACTOR
434	3211629	734128	Paul Heiman	\N	Party Attendee	https://st.kp.yandex.net/images/actor_iphone/iphone360_3211629.jpg	Актеры	ACTOR
435	3879526	734128	Adriana Karras	Адриана Каррас	Chloe	https://st.kp.yandex.net/images/actor_iphone/iphone360_3879526.jpg	Актеры	ACTOR
436	919483	734128	A.J. Keating	Френсис Китинг	Party Attendee	https://st.kp.yandex.net/images/actor_iphone/iphone360_919483.jpg	Актеры	ACTOR
437	3211630	734128	Thomas Kurthy	\N	Party Attendee	https://st.kp.yandex.net/images/actor_iphone/iphone360_3211630.jpg	Актеры	ACTOR
438	3116796	734128	Sam Myerson	Сэм Маерсон	Security	https://st.kp.yandex.net/images/actor_iphone/iphone360_3116796.jpg	Актеры	ACTOR
439	3211631	734128	Stephen Nelson	\N	Security	https://st.kp.yandex.net/images/actor_iphone/iphone360_3211631.jpg	Актеры	ACTOR
440	3168137	734128	Douglas Quackenbush	\N	Party Attendee	https://st.kp.yandex.net/images/actor_iphone/iphone360_3168137.jpg	Актеры	ACTOR
441	775636	734128	Brandon Ramirez	Брэндон Рамирез	Party Attendee	https://st.kp.yandex.net/images/actor_iphone/iphone360_775636.jpg	Актеры	ACTOR
442	2663650	734128	Jamie Ridge	Джэми Ридж	Featured Party Attendee	https://st.kp.yandex.net/images/actor_iphone/iphone360_2663650.jpg	Актеры	ACTOR
443	2776208	734128	Chelsea Turnbo	Челси Тёрнбо	Party Attendee	https://st.kp.yandex.net/images/actor_iphone/iphone360_2776208.jpg	Актеры	ACTOR
444	3069598	734128	Melissa Miller	Мелисса Миллер	\N	https://st.kp.yandex.net/images/actor_iphone/iphone360_3069598.jpg	Продюсеры	PRODUCER
446	1106928	734128	Lenny Bekerman	Ленни Бекерман	сопродюсер	https://st.kp.yandex.net/images/actor_iphone/iphone360_1106928.jpg	Продюсеры	PRODUCER
447	3069600	734128	Marina Masowietsky	Марина Масоветски	исполнительный продюсер	https://st.kp.yandex.net/images/actor_iphone/iphone360_3069600.jpg	Продюсеры	PRODUCER
448	1364732	734128	Sheira Rees-Davies	Шейра Рис-Дэвис	сопродюсер	https://st.kp.yandex.net/images/actor_iphone/iphone360_1364732.jpg	Продюсеры	PRODUCER
450	3494091	734128	Ross Raffin	\N	\N	https://st.kp.yandex.net/images/actor_iphone/iphone360_3494091.jpg	Сценаристы	WRITER
451	2253689	734128	Jacob R. Burke	Джейкоб Р. Бурк	\N	https://st.kp.yandex.net/images/actor_iphone/iphone360_2253689.jpg	Операторы	OPERATOR
452	3069601	734128	Gene Evaro Jr.	Джин Эваро мл.	\N	https://st.kp.yandex.net/images/actor_iphone/iphone360_3069601.jpg	Композиторы	COMPOSER
453	2716958	734128	Gene Evaro Sr.	Джин Эваро ст.	\N	https://st.kp.yandex.net/images/actor_iphone/iphone360_2716958.jpg	Композиторы	COMPOSER
454	1525067	734128	Daniel Heath	Дэниэл Хит	\N	https://st.kp.yandex.net/images/actor_iphone/iphone360_1525067.jpg	Композиторы	COMPOSER
455	3116797	734128	Eric Ryan	Эрик Райан	\N	https://st.kp.yandex.net/images/actor_iphone/iphone360_3116797.jpg	Композиторы	COMPOSER
456	1784426	734128	Lasha Zambakhidze	Лаша Замбахидзе	постановщик	https://st.kp.yandex.net/images/actor_iphone/iphone360_1784426.jpg	Художники	DESIGN
457	3211632	734128	Stewart Shevin	Стюарт Шевин	\N	https://st.kp.yandex.net/images/actor_iphone/iphone360_3211632.jpg	Монтажеры	EDITOR
458	3594025	1346348	Pavel Grinyov	Павел Гринёв	\N	https://st.kp.yandex.net/images/actor_iphone/iphone360_3594025.jpg	Режиссеры	DIRECTOR
460	3594026	1346348	Nikolay Moiseev	Николай Моисеев	играет самого себя - Supporting Cast	https://st.kp.yandex.net/images/actor_iphone/iphone360_3594026.jpg	Актеры	ACTOR
461	1606804	1346348	James Rolfe	Джеймс Рольф	играет самого себя, хроника	https://st.kp.yandex.net/images/actor_iphone/iphone360_1606804.jpg	Актеры	ACTOR
462	1725239	1346348	\N	Сергей Супонев	играет самого себя, хроника	https://st.kp.yandex.net/images/actor_iphone/iphone360_1725239.jpg	Актеры	ACTOR
464	5970164	1346348	\N	Фиалка	\N	https://st.kp.yandex.net/images/actor_iphone/iphone360_5970164.jpg	Операторы	OPERATOR
465	5970163	1346348	\N	Владимир Тугай	\N	https://st.kp.yandex.net/images/actor_iphone/iphone360_5970163.jpg	Композиторы	COMPOSER
467	297874	542577	\N	Михаил Роговой	\N	https://st.kp.yandex.net/images/actor_iphone/iphone360_297874.jpg	Режиссеры	DIRECTOR
468	2234770	542577	\N	Виктор Зюкин	\N	https://st.kp.yandex.net/images/actor_iphone/iphone360_2234770.jpg	Продюсеры	PRODUCER
469	1815794	542577	\N	Геннадий Меркулов	\N	https://st.kp.yandex.net/images/actor_iphone/iphone360_1815794.jpg	Продюсеры	PRODUCER
471	2234767	542577	\N	С. Мангул	\N	https://st.kp.yandex.net/images/actor_iphone/iphone360_2234767.jpg	Операторы	OPERATOR
472	2234769	542577	\N	А. Чуйков	\N	https://st.kp.yandex.net/images/actor_iphone/iphone360_2234769.jpg	Операторы	OPERATOR
473	5827847	1313572	Dongwon Lee	Донгвон Ли	\N	https://st.kp.yandex.net/images/actor_iphone/iphone360_5827847.jpg	Режиссеры	DIRECTOR
474	1665014	1313572	\N	Игорь Балалаев	Эдмон Дантес	https://st.kp.yandex.net/images/actor_iphone/iphone360_1665014.jpg	Актеры	ACTOR
475	1555514	1313572	\N	Валерия Ланская	Мерседес	https://st.kp.yandex.net/images/actor_iphone/iphone360_1555514.jpg	Актеры	ACTOR
476	1665042	1313572	\N	Александр Маракулин	Вильфор	https://st.kp.yandex.net/images/actor_iphone/iphone360_1665042.jpg	Актеры	ACTOR
477	2216705	1313572	\N	Дмитрий Ермак	Фернан	https://st.kp.yandex.net/images/actor_iphone/iphone360_2216705.jpg	Актеры	ACTOR
478	1146384	1313572	\N	Антон Дёров	Бертуччо	https://st.kp.yandex.net/images/actor_iphone/iphone360_1146384.jpg	Актеры	ACTOR
479	1769537	1313572	\N	Вадим Мичман	Бенедетто	https://st.kp.yandex.net/images/actor_iphone/iphone360_1769537.jpg	Актеры	ACTOR
480	3680158	1313572	\N	Владислав Кирюхин	Бошан	https://st.kp.yandex.net/images/actor_iphone/iphone360_3680158.jpg	Актеры	ACTOR
481	5256454	1313572	\N	Денис Дэмкив	Альбер	https://st.kp.yandex.net/images/actor_iphone/iphone360_5256454.jpg	Актеры	ACTOR
482	5827840	1313572	\N	Дарья Январина	Валентина	https://st.kp.yandex.net/images/actor_iphone/iphone360_5827840.jpg	Актеры	ACTOR
483	1655607	1313572	\N	Лика Рулла	Эрмина	https://st.kp.yandex.net/images/actor_iphone/iphone360_1655607.jpg	Актеры	ACTOR
484	5291688	1313572	\N	Карине Асирян	Гайде	https://st.kp.yandex.net/images/actor_iphone/iphone360_5291688.jpg	Актеры	ACTOR
485	1556629	1313572	\N	Александр Маркелов	Аббат Фариа	https://st.kp.yandex.net/images/actor_iphone/iphone360_1556629.jpg	Актеры	ACTOR
486	5827841	1313572	\N	Артём Говорун	Дух замка Иф / Альбер в детстве	https://st.kp.yandex.net/images/actor_iphone/iphone360_5827841.jpg	Актеры	ACTOR
487	5827842	1313572	\N	Мария Маракулина	Валентина в детстве	https://st.kp.yandex.net/images/actor_iphone/iphone360_5827842.jpg	Актеры	ACTOR
488	5290722	1313572	\N	Владимир Тартаковский	\N	https://st.kp.yandex.net/images/actor_iphone/iphone360_5290722.jpg	Продюсеры	PRODUCER
489	5290723	1313572	\N	Алексей Болонин	\N	https://st.kp.yandex.net/images/actor_iphone/iphone360_5290723.jpg	Продюсеры	PRODUCER
490	293648	1313572	\N	Юлий Ким	\N	https://st.kp.yandex.net/images/actor_iphone/iphone360_293648.jpg	Сценаристы	WRITER
491	5290733	1313572	\N	Роман Игнатьев	\N	https://st.kp.yandex.net/images/actor_iphone/iphone360_5290733.jpg	Композиторы	COMPOSER
492	5290735	1313572	\N	Вячеслав Окунев	постановщик	https://st.kp.yandex.net/images/actor_iphone/iphone360_5290735.jpg	Художники	DESIGN
493	2554673	961694	Rob Silvestri	\N	\N	https://st.kp.yandex.net/images/actor_iphone/iphone360_2554673.jpg	Режиссеры	DIRECTOR
494	385515	961694	Laura Bailey	Лора Бэйли	Black Widow, озвучка	https://st.kp.yandex.net/images/actor_iphone/iphone360_385515.jpg	Актеры	ACTOR
495	932815	961694	Troy Baker	Трой Бэйкер	Hawkeye, озвучка	https://st.kp.yandex.net/images/actor_iphone/iphone360_932815.jpg	Актеры	ACTOR
496	1586134	961694	Eric Bauza	Эрик Бауза	Iron Spider, озвучка	https://st.kp.yandex.net/images/actor_iphone/iphone360_1586134.jpg	Актеры	ACTOR
499	1919534	961694	JP Karliak	Джон Пол Карлиак	Baron Strucker / Vision, озвучка	https://st.kp.yandex.net/images/actor_iphone/iphone360_1919534.jpg	Актеры	ACTOR
500	7389	961694	Jim Meskimen	Джим Мескимен	Ultron, озвучка	https://st.kp.yandex.net/images/actor_iphone/iphone360_7389.jpg	Актеры	ACTOR
501	51832	961694	Bumper Robinson	Бампер Робинсон	Falcon, озвучка	https://st.kp.yandex.net/images/actor_iphone/iphone360_51832.jpg	Актеры	ACTOR
502	1140561	961694	Roger Craig Smith	Роджер Крэйг Смит	Captain America, озвучка	https://st.kp.yandex.net/images/actor_iphone/iphone360_1140561.jpg	Актеры	ACTOR
503	26869	961694	Fred Tatasciore	Фред Таташиор	Hulk, озвучка	https://st.kp.yandex.net/images/actor_iphone/iphone360_26869.jpg	Актеры	ACTOR
504	33639	961694	Travis Willingham	Трэвис Уиллингэм	Thor / Yellowjacket, озвучка	https://st.kp.yandex.net/images/actor_iphone/iphone360_33639.jpg	Актеры	ACTOR
505	793501	961694	Mick Wingert	Мик Уингерт	Iron Man, озвучка	https://st.kp.yandex.net/images/actor_iphone/iphone360_793501.jpg	Актеры	ACTOR
506	1545474	961694	Nickie Bryar	Никки Брайар	NYC Citizens / HYDRA Troopers / S.H.I.E.L.D. Walla, озвучка	https://st.kp.yandex.net/images/actor_iphone/iphone360_1545474.jpg	Актеры	ACTOR
507	2218565	961694	Megan Grano	Меган Грано	NYC Citizens / HYDRA Troopers / S.H.I.E.L.D. Walla, озвучка	https://st.kp.yandex.net/images/actor_iphone/iphone360_2218565.jpg	Актеры	ACTOR
508	973148	961694	Bobby Kesselman	Бобби Кесселман	NYC Citizens / HYDRA Troopers / S.H.I.E.L.D. Walla, озвучка (в титрах: Robert Kesselman)	https://st.kp.yandex.net/images/actor_iphone/iphone360_973148.jpg	Актеры	ACTOR
509	1052052	961694	J. Lee	Дж. Ли	NYC Citizens / HYDRA Troopers / S.H.I.E.L.D. Walla, озвучка (в титрах: J Lee)	https://st.kp.yandex.net/images/actor_iphone/iphone360_1052052.jpg	Актеры	ACTOR
510	4660258	961694	Leo Martin	Лео Мартин	\N	https://st.kp.yandex.net/images/actor_iphone/iphone360_4660258.jpg	Продюсеры	PRODUCER
511	2406676	961694	Dan Buckley	Дэн Бакли	исполнительный продюсер	https://st.kp.yandex.net/images/actor_iphone/iphone360_2406676.jpg	Продюсеры	PRODUCER
512	3273006	961694	Kalia Cheng	Калия Чэн	сопродюсер	https://st.kp.yandex.net/images/actor_iphone/iphone360_3273006.jpg	Продюсеры	PRODUCER
513	3895967	961694	Jason Cosler	Джейсон Кослер	исполнительный продюсер	https://st.kp.yandex.net/images/actor_iphone/iphone360_3895967.jpg	Продюсеры	PRODUCER
514	1121617	961694	Marianne Culbert	Марианн Кулберт	исполнительный продюсер: Arc Productions	https://st.kp.yandex.net/images/actor_iphone/iphone360_1121617.jpg	Продюсеры	PRODUCER
515	4660257	961694	Neat Deal	Нит Дил	signatory продюсер	https://st.kp.yandex.net/images/actor_iphone/iphone360_4660257.jpg	Продюсеры	PRODUCER
516	1930252	961694	Alan Fine	Алан Файн	исполнительный продюсер	https://st.kp.yandex.net/images/actor_iphone/iphone360_1930252.jpg	Продюсеры	PRODUCER
517	1282143	961694	Kallen Kagen	Каллен Кэген	исполнительный продюсер: Arc Productions	https://st.kp.yandex.net/images/actor_iphone/iphone360_1282143.jpg	Продюсеры	PRODUCER
518	1692710	961694	Cort Lane	Корт Лэйн	исполнительный сопродюсер	https://st.kp.yandex.net/images/actor_iphone/iphone360_1692710.jpg	Продюсеры	PRODUCER
519	8242	961694	Stan Lee	Стэн Ли	исполнительный сопродюсер	https://st.kp.yandex.net/images/actor_iphone/iphone360_8242.jpg	Продюсеры	PRODUCER
520	68463	961694	Jeph Loeb	Джеф Лоуб	исполнительный продюсер	https://st.kp.yandex.net/images/actor_iphone/iphone360_68463.jpg	Продюсеры	PRODUCER
521	2792912	961694	Dan Mokriy	Дэн Мокрий	продюсер-супервайзер	https://st.kp.yandex.net/images/actor_iphone/iphone360_2792912.jpg	Продюсеры	PRODUCER
522	51348	961694	Joe Quesada	Джо Кесада	исполнительный продюсер	https://st.kp.yandex.net/images/actor_iphone/iphone360_51348.jpg	Продюсеры	PRODUCER
523	1942884	961694	Jill Wilfert	Джилл Уилферт	исполнительный продюсер	https://st.kp.yandex.net/images/actor_iphone/iphone360_1942884.jpg	Продюсеры	PRODUCER
524	702836	961694	Mark Hoffmeier	Марк Хоффмейер	\N	https://st.kp.yandex.net/images/actor_iphone/iphone360_702836.jpg	Сценаристы	WRITER
525	702341	961694	Asher Lenz	Эшер Ленц	\N	https://st.kp.yandex.net/images/actor_iphone/iphone360_702341.jpg	Композиторы	COMPOSER
526	608262	961694	Stephen Skratt	Стивен Скратт	\N	https://st.kp.yandex.net/images/actor_iphone/iphone360_608262.jpg	Композиторы	COMPOSER
527	6893983	961694	Chi Woo Park	\N	постановщик	https://st.kp.yandex.net/images/actor_iphone/iphone360_6893983.jpg	Художники	DESIGN
528	4660259	961694	Andy Ng	\N	\N	https://st.kp.yandex.net/images/actor_iphone/iphone360_4660259.jpg	Художники	DESIGN
529	2554674	961694	Matt Ahrens	Мэтт Аренс	\N	https://st.kp.yandex.net/images/actor_iphone/iphone360_2554674.jpg	Монтажеры	EDITOR
530	402826	1405666	Fred Fougea	Фред Фюжа	\N	https://st.kp.yandex.net/images/actor_iphone/iphone360_402826.jpg	Режиссеры	DIRECTOR
531	240469	1405666	Nathan Willcocks	Нэйтан Уиллкокс	рассказчик, озвучка	https://st.kp.yandex.net/images/actor_iphone/iphone360_240469.jpg	Актеры	ACTOR
532	57172	1405666	Gérard Lanvin	Жерар Ланвен	рассказчик	https://st.kp.yandex.net/images/actor_iphone/iphone360_57172.jpg	Актеры	ACTOR
533	402828	1405666	Barthelemy Fougea	Бартелеми Фюжа	\N	https://st.kp.yandex.net/images/actor_iphone/iphone360_402828.jpg	Продюсеры	PRODUCER
536	3241244	1405666	Rousslan Dion	\N	\N	https://st.kp.yandex.net/images/actor_iphone/iphone360_3241244.jpg	Операторы	OPERATOR
537	1981528	1405666	Mathieu Giombini	Мэтью Джиомбини	\N	https://st.kp.yandex.net/images/actor_iphone/iphone360_1981528.jpg	Операторы	OPERATOR
538	1082460	1405666	Robin Coudert	Робин Кудер	\N	https://st.kp.yandex.net/images/actor_iphone/iphone360_1082460.jpg	Композиторы	COMPOSER
539	2013533	1405666	Laurence Guzzo	Лоранс Гуззо	\N	https://st.kp.yandex.net/images/actor_iphone/iphone360_2013533.jpg	Монтажеры	EDITOR
540	2088632	1405666	Michael Zakine	\N	\N	https://st.kp.yandex.net/images/actor_iphone/iphone360_2088632.jpg	Монтажеры	EDITOR
\.


--
-- Data for Name: similarmovies; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.similarmovies (id, film_id, name_ru, name_en, name_original, poster_url, poster_url_preview, relation_type, kinopoisk_id) FROM stdin;
1	391177	Бобик в гостях у Барбоса	\N	\N	https://kinopoiskapiunofficial.tech/images/posters/kp/391177.jpg	https://kinopoiskapiunofficial.tech/images/posters/kp_small/391177.jpg	SIMILAR	45319
2	42866	Падал прошлогодний снег	\N	\N	https://kinopoiskapiunofficial.tech/images/posters/kp/42866.jpg	https://kinopoiskapiunofficial.tech/images/posters/kp_small/42866.jpg	SIMILAR	45319
3	260226	Волк и теленок	\N	\N	https://kinopoiskapiunofficial.tech/images/posters/kp/260226.jpg	https://kinopoiskapiunofficial.tech/images/posters/kp_small/260226.jpg	SIMILAR	45319
4	417827	Мартынко	\N	\N	https://kinopoiskapiunofficial.tech/images/posters/kp/417827.jpg	https://kinopoiskapiunofficial.tech/images/posters/kp_small/417827.jpg	SIMILAR	45319
5	326	Побег из Шоушенка	The Shawshank Redemption	The Shawshank Redemption	https://kinopoiskapiunofficial.tech/images/posters/kp/326.jpg	https://kinopoiskapiunofficial.tech/images/posters/kp_small/326.jpg	SIMILAR	435
6	448	Форрест Гамп	Forrest Gump	Forrest Gump	https://kinopoiskapiunofficial.tech/images/posters/kp/448.jpg	https://kinopoiskapiunofficial.tech/images/posters/kp_small/448.jpg	SIMILAR	435
7	723	Планета Ка-Пэкс	K-PAX	K-PAX	https://kinopoiskapiunofficial.tech/images/posters/kp/723.jpg	https://kinopoiskapiunofficial.tech/images/posters/kp_small/723.jpg	SIMILAR	435
8	738	Жизнь Дэвида Гейла	The Life of David Gale	The Life of David Gale	https://kinopoiskapiunofficial.tech/images/posters/kp/738.jpg	https://kinopoiskapiunofficial.tech/images/posters/kp_small/738.jpg	SIMILAR	435
9	279880	Подмена	Changeling	Changeling	https://kinopoiskapiunofficial.tech/images/posters/kp/279880.jpg	https://kinopoiskapiunofficial.tech/images/posters/kp_small/279880.jpg	SIMILAR	435
10	357	Убить пересмешника	To Kill a Mockingbird	To Kill a Mockingbird	https://kinopoiskapiunofficial.tech/images/posters/kp/357.jpg	https://kinopoiskapiunofficial.tech/images/posters/kp_small/357.jpg	SIMILAR	435
11	273302	Мгла	The Mist	The Mist	https://kinopoiskapiunofficial.tech/images/posters/kp/273302.jpg	https://kinopoiskapiunofficial.tech/images/posters/kp_small/273302.jpg	SIMILAR	435
12	2271	Пудра	Powder	Powder	https://kinopoiskapiunofficial.tech/images/posters/kp/2271.jpg	https://kinopoiskapiunofficial.tech/images/posters/kp_small/2271.jpg	SIMILAR	435
13	646	Танцующая в темноте	Dancer in the Dark	Dancer in the Dark	https://kinopoiskapiunofficial.tech/images/posters/kp/646.jpg	https://kinopoiskapiunofficial.tech/images/posters/kp_small/646.jpg	SIMILAR	435
14	7363	Мертвец идет	Dead Man Walking	Dead Man Walking	https://kinopoiskapiunofficial.tech/images/posters/kp/7363.jpg	https://kinopoiskapiunofficial.tech/images/posters/kp_small/7363.jpg	SIMILAR	435
15	5813	Настоящее преступление	True Crime	True Crime	https://kinopoiskapiunofficial.tech/images/posters/kp/5813.jpg	https://kinopoiskapiunofficial.tech/images/posters/kp_small/5813.jpg	SIMILAR	435
16	4821789	Навальный	NAVALNY	NAVALNY	https://kinopoiskapiunofficial.tech/images/posters/kp/4821789.jpg	https://kinopoiskapiunofficial.tech/images/posters/kp_small/4821789.jpg	SIMILAR	1043713
17	435	Зеленая миля	The Green Mile	The Green Mile	https://kinopoiskapiunofficial.tech/images/posters/kp/435.jpg	https://kinopoiskapiunofficial.tech/images/posters/kp_small/435.jpg	SIMILAR	326
18	336	Пролетая над гнездом кукушки	One Flew Over the Cuckoo's Nest	One Flew Over the Cuckoo's Nest	https://kinopoiskapiunofficial.tech/images/posters/kp/336.jpg	https://kinopoiskapiunofficial.tech/images/posters/kp_small/336.jpg	SIMILAR	326
19	258048	Побег	Prison Break	Prison Break	https://kinopoiskapiunofficial.tech/images/posters/kp/258048.jpg	https://kinopoiskapiunofficial.tech/images/posters/kp_small/258048.jpg	SIMILAR	326
20	468958	Три дня на побег	The Next Three Days	The Next Three Days	https://kinopoiskapiunofficial.tech/images/posters/kp/468958.jpg	https://kinopoiskapiunofficial.tech/images/posters/kp_small/468958.jpg	SIMILAR	326
21	4525	Мотылек	Papillon	Papillon	https://kinopoiskapiunofficial.tech/images/posters/kp/4525.jpg	https://kinopoiskapiunofficial.tech/images/posters/kp_small/4525.jpg	SIMILAR	326
22	10851	Побег из Алькатраса	Escape from Alcatraz	Escape from Alcatraz	https://kinopoiskapiunofficial.tech/images/posters/kp/10851.jpg	https://kinopoiskapiunofficial.tech/images/posters/kp_small/10851.jpg	SIMILAR	326
23	463686	План побега	Escape Plan	Escape Plan	https://kinopoiskapiunofficial.tech/images/posters/kp/463686.jpg	https://kinopoiskapiunofficial.tech/images/posters/kp_small/463686.jpg	SIMILAR	326
24	7687	Полуночный экспресс	Midnight Express	Midnight Express	https://kinopoiskapiunofficial.tech/images/posters/kp/7687.jpg	https://kinopoiskapiunofficial.tech/images/posters/kp_small/7687.jpg	SIMILAR	326
25	4914	Ураган	The Hurricane	The Hurricane	https://kinopoiskapiunofficial.tech/images/posters/kp/4914.jpg	https://kinopoiskapiunofficial.tech/images/posters/kp_small/4914.jpg	SIMILAR	326
26	77275	Бангкок Хилтон	Bangkok Hilton	Bangkok Hilton	https://kinopoiskapiunofficial.tech/images/posters/kp/77275.jpg	https://kinopoiskapiunofficial.tech/images/posters/kp_small/77275.jpg	SIMILAR	326
27	395756	Преступник	Felon	Felon	https://kinopoiskapiunofficial.tech/images/posters/kp/395756.jpg	https://kinopoiskapiunofficial.tech/images/posters/kp_small/395756.jpg	SIMILAR	326
28	436502	Пророк	Un prophète	Un prophète	https://kinopoiskapiunofficial.tech/images/posters/kp/436502.jpg	https://kinopoiskapiunofficial.tech/images/posters/kp_small/436502.jpg	SIMILAR	326
\.


--
-- Name: actors_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.actors_id_seq', 1, false);


--
-- Name: favouritesmovies_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.favouritesmovies_id_seq', 30, true);


--
-- Name: images_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.images_id_seq', 91, true);


--
-- Name: movies_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.movies_id_seq', 20, true);


--
-- Name: persons_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.persons_id_seq', 540, true);


--
-- Name: similarmovies_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.similarmovies_id_seq', 28, true);


--
-- Name: _prisma_migrations _prisma_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);


--
-- Name: actors actors_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.actors
    ADD CONSTRAINT actors_pkey PRIMARY KEY (id);


--
-- Name: favouritesmovies favouritesmovies_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.favouritesmovies
    ADD CONSTRAINT favouritesmovies_pkey PRIMARY KEY (id);


--
-- Name: images images_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.images
    ADD CONSTRAINT images_pkey PRIMARY KEY (id);


--
-- Name: movies movies_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.movies
    ADD CONSTRAINT movies_pkey PRIMARY KEY (id);


--
-- Name: persons persons_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.persons
    ADD CONSTRAINT persons_pkey PRIMARY KEY (id);


--
-- Name: similarmovies similarmovies_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.similarmovies
    ADD CONSTRAINT similarmovies_pkey PRIMARY KEY (id);


--
-- Name: actors_personId_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "actors_personId_key" ON public.actors USING btree ("personId");


--
-- Name: favouritesmovies_imdb_id_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX favouritesmovies_imdb_id_key ON public.favouritesmovies USING btree (imdb_id);


--
-- Name: favouritesmovies_kinopoisk_id_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX favouritesmovies_kinopoisk_id_key ON public.favouritesmovies USING btree (kinopoisk_id);


--
-- Name: movies_imdb_id_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX movies_imdb_id_key ON public.movies USING btree (imdb_id);


--
-- Name: movies_kinopoisk_id_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX movies_kinopoisk_id_key ON public.movies USING btree (kinopoisk_id);


--
-- Name: persons_staff_id_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX persons_staff_id_key ON public.persons USING btree (staff_id);


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE USAGE ON SCHEMA public FROM PUBLIC;


--
-- PostgreSQL database dump complete
--

