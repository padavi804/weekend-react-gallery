CREATE TABLE "gallery" (
  "id" SERIAL PRIMARY KEY,
  "url" VARCHAR,
  "title" VARCHAR,
  "description" TEXT,
  "likes" INTEGER DEFAULT 0
);

INSERT INTO "gallery" 
("url", "title", "description")
VALUES
('images/goat_small.jpg', 'Goat!', 'Photo of a goat taken at Glacier National Park.'),
('images/goat_stache.png', 'Goat Stache!', 'Photo of a mustachioed goat taken at Glacier National Park.');
  

  INSERT INTO "gallery" 
("url", "title", "description")
VALUES
('images/bigskyskate.jpg', 'Skating in Big Sky!', 'Skating with my adventure partner'),
('images/Rebel.jpg', 'Rebel', 'Our sweet old boy Rebel'),
('images/chester.jpg', 'Chester', 'Chester keeps us on our toes'),
('images/duluth.jpg', 'Duluth', 'Duluth will always be home'),
('images/sanjuans.jpg', 'San Juans', 'San Juan Mountains sunset'),
('images/sawtoothlake.jpg', 'Sawtooths', 'Sawtooth Mountain trail run'),
('images/bikeraft.jpg', 'Bikerafting', 'Opting for alternative travels'),
('images/bikemaintenance.jpg', 'Zen', 'Zen and the Art of Bicycle Maintenance'),
('images/glacier.jpg', 'Glacier Snowline', 'Seeing cool places on two wheels'),
('images/cribbage.jpg', 'Cribbage', 'Fifteen two...'),
('images/xcski.jpg', 'Skiing', 'Sunny Sun Valley XC ski'),
('images/bwca.jpg', 'BWCA', 'Boundary Waters sunrise'),
('images/ak.jpg', 'Plane', 'Alaska dreams'),
('images/bikeice.jpg', 'Slippery', 'Winter exploring'); 