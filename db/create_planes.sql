create table airplanes
(
    plane_id serial PRIMARY KEY,
    plan_type VARCHAR(40),
    passenger_count INTEGER NOT NULL
)