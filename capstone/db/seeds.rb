# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
user = User.new
user.email = 'test@example.com'
user.password = 'valid_password'
user.password_confirmation = 'valid_password'
user.username = 'TestUser1'
user.gender = 'male'
user.age = 23
user.bio = 'im a fullstack web developer currently working freelance'
user.picture_url = 'https://i0.wp.com/zblogged.com/wp-content/uploads/2019/02/FakeDP.jpeg?resize=567%2C580&ssl=1'
user.lat = 32.708858
user.lng = -117.158563
user.firstname = 'John'
user.lastname = 'Dogh'
user.is_signed_in = true
user.save!

user2 = User.new
user2.email = 'tester@example.com'
user2.password = 'valid_password'
user2.password_confirmation = 'valid_password'
user2.username = 'TestUser2'
user2.gender = 'male'
user2.age = 31
user2.bio = 'im a fullstack web developer currently working freelance'
user2.picture_url = 'https://i2.wp.com/zblogged.com/wp-content/uploads/2015/12/2.jpg?w=400&ssl=1'
user2.lat = 32.709752
user2.lng = -117.156170
user2.firstname = 'Jane'
user2.lastname = 'Dogh'
user2.is_signed_in = true
user2.save!

user3 = User.new
user3.email = 'testing@example.com'
user3.password = 'valid_password'
user3.password_confirmation = 'valid_password'
user3.username = 'TestUser3'
user3.gender = 'female'
user3.age = 31
user3.bio = 'im a fullstack web developer currently working freelance'
user3.picture_url = 'https://i0.wp.com/zblogged.com/wp-content/uploads/2015/10/4.jpg?w=343&ssl=1'
user3.lat = 32.712247
user3.lng = -117.158009
user3.firstname = 'howy'
user3.lastname = 'Dogh'
user3.is_signed_in = true
user3.save!

Tagname.create(
  tag: "Rails"
)
Tagname.create(
  tag: "JavaScript"
)
Tagname.create(
  tag: "Ruby"
)

Post.create(
  user_id: 1,
  poststring: 'this is like a really cool coffee shop anyone down to chat about how to setup react in rails??',
  post_status: 1,
  lat: 32.708858,
  lng: -117.158563
)
Tag.create(
  post_id: 1,
  tagname_id: 1
)

Post.create(
  user_id: 2,
  poststring: 'Anyone wanna grab a burger and chat about how devise works',
  post_status: 2,
  lat: 32.709026,
  lng: -117.156089
)
Tag.create(
  post_id: 2,
  tagname_id: 2
)

Post.create(
  user_id: 1,
  poststring: 'hey anyone out there looking for some help with JS. looking for JS newbies to mentor just DM me',
  post_status: 3,
  lat: 32.708858,
  lng: -117.158563
)
Tag.create(
  post_id: 3,
  tagname_id: 3
)
