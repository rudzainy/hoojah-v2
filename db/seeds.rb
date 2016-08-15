count = 0
[['Are pandas combination of sun and polar bears?', 'Yes', 'No', 'http://res.cloudinary.com/rudzainy/image/upload/c_fit,h_350,w_350/v1453431275/o8l4yhifsdcryiezuuos.png'],
 ['Tomatoes are...', 'Fruits', 'Vegetables', 'http://res.cloudinary.com/rudzainy/image/upload/c_fit,h_350,w_350/v1453282630/jczcb3cyfw8dpiilntxe.png'],
 ['Burgers are healthy!', 'Agree', 'Disagree', 'http://res.cloudinary.com/rudzainy/image/upload/c_fit,h_350,w_350/v1453282564/b6yzwubboia07pp7zpok.png'],
 ['Modern or classic cars?', 'Modern', 'Classic', 'http://res.cloudinary.com/rudzainy/image/upload/c_fit,h_350,w_350/v1453282518/pqfqjzwmknf8mxtwewkg.png']]
 .each do |data|
  text = data[0]
  side1 = data[1]
  side2 = data[2]
  image = data[3]

  Opinion.create!({
    text: text,
    side1: side1,
    side2: side2,
    image: image
  })
  count += 1
end

puts "Opinions created: #{count}"
puts "Seeding complete!"