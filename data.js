const initialData= {
  "statuses": [
    {
      "name": "available"
    },
    {
      "name": "pending"
    },
    {
      "name": "adopted"
    },
    {
      "name": "on hold"
    }
  ],
  "breeds":[
    {
      "name": "cat"
    },
        {
      "name": "dog"
    },
        {
      "name": "bird"
    },
        {
      "name": "badger"
    }
  ],
  "users":[
    {
      "username": "admin@paws4pals.com",
      "password": "Password123",
      "type": "admin"
    },
    {
      "username": "guest@example.com",
      "password": "Password123",
      "type": "guest"
    }
  ],
  "pets": [
    {
      "id": 1,
      "name": "Whiskers",
      "breed": "cat",
      "subType": "Tabby",
      "sex": "Male",
      "age": 3,
      "colour": "Orange and white",
      "temperament": "Friendly and playful, loves attention from everyone",
      "comments": "Great with children, enjoys lounging in sunny spots",
      "adoptionStatus": "available",
      "imageUrl": "./imgs/Pets/Whiskers_01.jpeg"
    },
    {
      "id": 2,
      "name": "Luna",
      "breed": "cat",
      "subType": "Siamese",
      "sex": "Female",
      "age": 2,
      "colour": "Cream with dark points",
      "temperament": "Talkative and affectionate, but can be a bit demanding",
      "comments": "Very vocal, likes to follow her human around the house",
      "adoptionStatus": "pending",
      "imageUrl": "./imgs/Pets/Luna_01.jpeg"
    },
    {
      "id": 3,
      "name": "Mittens",
      "breed": "cat",
      "subType": "Persian",
      "sex": "Female",
      "age": 5,
      "colour": "White",
      "temperament": "Calm and gentle, prefers quiet environments",
      "comments": "Requires daily grooming, best suited for a peaceful home",
      "adoptionStatus": "available",
      "imageUrl": "./imgs/Pets/Mittens_01.jpeg"
    },
    {
      "id": 4,
      "name": "Simba",
      "breed": "cat",
      "subType": "Maine Coon",
      "sex": "Male",
      "age": 4,
      "colour": "Brown tabby",
      "temperament": "Gentle giant, friendly but a little shy with strangers",
      "comments": "Large breed, very laid-back personality",
      "adoptionStatus": "adopted",
      "imageUrl": "./imgs/Pets/Simba_01.jpeg"
    },
    {
      "id": 5,
      "name": "Tiger",
      "breed": "cat",
      "subType": "Bengal",
      "sex": "Male",
      "age": 1,
      "colour": "Spotted brown",
      "temperament": "Energetic and curious, loves to explore and climb",
      "comments": "Very active, needs lots of stimulation and playtime",
      "adoptionStatus": "available",
      "imageUrl": "./imgs/Pets/Tiger_01.jpeg"
    },
    {
      "id": 6,
      "name": "Buddy",
      "breed": "dog",
      "subType": "Golden Retriever",
      "sex": "Male",
      "age": 3,
      "colour": "Golden",
      "temperament": "Friendly and loyal, great with kids and other pets",
      "comments": "Well-trained, loves swimming and fetch",
      "adoptionStatus": "available",
      "imageUrl": "./imgs/Pets/Buddy_01.jpeg"
    },
    {
      "id": 7,
      "name": "Max",
      "breed": "dog",
      "subType": "German Shepherd",
      "sex": "Male",
      "age": 4,
      "colour": "Black and tan",
      "temperament": "Intelligent and protective, needs an experienced owner",
      "comments": "Excellent guard dog, requires regular exercise",
      "adoptionStatus": "on hold",
      "imageUrl": "./imgs/Pets/Max_01.jpeg"
    },
    {
      "id": 8,
      "name": "Daisy",
      "breed": "dog",
      "subType": "Labrador",
      "sex": "Female",
      "age": 2,
      "colour": "Yellow",
      "temperament": "Enthusiastic and loving, sometimes a bit too energetic",
      "comments": "Needs training on leash manners, loves everyone she meets",
      "adoptionStatus": "available",
      "imageUrl": "./imgs/Pets/Daisy_01.jpeg"
    },
    {
      "id": 9,
      "name": "Charlie",
      "breed": "dog",
      "subType": "Beagle",
      "sex": "Male",
      "age": 5,
      "colour": "Tricolor",
      "temperament": "Curious and friendly, follows his nose everywhere",
      "comments": "May wander if not on leash, good with other dogs",
      "adoptionStatus": "adopted",
      "imageUrl": "./imgs/Pets/Charlie_01.jpeg"
    },
    {
      "id": 10,
      "name": "Bella",
      "breed": "dog",
      "subType": "Poodle",
      "sex": "Female",
      "age": 6,
      "colour": "White",
      "temperament": "Smart and elegant, a bit reserved with new people",
      "comments": "Hypoallergenic coat, requires regular grooming",
      "adoptionStatus": "pending",
      "imageUrl": "./imgs/Pets/Bella_01.jpeg"
    },
    {
      "id": 11,
      "name": "Tweety",
      "breed": "bird",
      "subType": "Parakeet",
      "sex": "Male",
      "age": 2,
      "colour": "Blue and white",
      "temperament": "Chatty and social, loves to mimic sounds",
      "comments": "Can learn simple words, enjoys being around people",
      "adoptionStatus": "available",
      "imageUrl": "./imgs/Pets/Tweety_01.jpeg"
    },
    {
      "id": 12,
      "name": "Sunny",
      "breed": "bird",
      "subType": "Cockatiel",
      "sex": "Female",
      "age": 3,
      "colour": "Grey with yellow face",
      "temperament": "Gentle and affectionate, loves head scratches",
      "comments": "Whistles beautifully, good for first-time bird owners",
      "adoptionStatus": "available",
      "imageUrl": "./imgs/Pets/Sunny_01.jpeg"
    },
    {
      "id": 13,
      "name": "Pip",
      "breed": "bird",
      "subType": "Canary",
      "sex": "Male",
      "age": 1,
      "colour": "Yellow",
      "temperament": "Shy but musical, prefers to observe rather than interact",
      "comments": "Beautiful singer, best for someone who enjoys bird songs",
      "adoptionStatus": "adopted",
      "imageUrl": "./imgs/Pets/Pip_01.jpeg"
    },
    {
      "id": 14,
      "name": "Peaches",
      "breed": "bird",
      "subType": "Lovebird",
      "sex": "Female",
      "age": 2,
      "colour": "Peach and green",
      "temperament": "Playful and curious, can be a bit nippy when excited",
      "comments": "Very bonded to humans, needs daily interaction",
      "adoptionStatus": "available",
      "imageUrl": "./imgs/Pets/Peaches_01.jpeg"
    },
    {
      "id": 15,
      "name": "Chirpy",
      "breed": "bird",
      "subType": "Finch",
      "sex": "Male",
      "age": 1,
      "colour": "Brown and orange",
      "temperament": "Active and social, does best with other finches",
      "comments": "Low maintenance, beautiful to watch in flight",
      "adoptionStatus": "available",
      "imageUrl": "./imgs/Pets/Chirpy_01.jpeg"
    },
    {
      "id": 16,
      "name": "Barnaby",
      "breed": "badger",
      "subType": "European Badger",
      "sex": "Male",
      "age": 3,
      "colour": "Black and white striped face",
      "temperament": "Nocturnal and independent, can be grumpy if disturbed",
      "comments": "Requires specialized care and large outdoor enclosure",
      "adoptionStatus": "on hold",
      "imageUrl": "./imgs/Pets/Barnaby_01.jpeg"
    },
    {
      "id": 17,
      "name": "Patches",
      "breed": "badger",
      "subType": "American Badger",
      "sex": "Female",
      "age": 4,
      "colour": "Grey with white stripe",
      "temperament": "Solitary but curious, prefers minimal handling",
      "comments": "Experienced exotic pet owner required",
      "adoptionStatus": "available",
      "imageUrl": "./imgs/Pets/Patches_01.jpeg"
    },
    {
      "id": 18,
      "name": "Rascal",
      "breed": "badger",
      "subType": "Honey Badger",
      "sex": "Male",
      "age": 5,
      "colour": "Black with grey back",
      "temperament": "Fearless and energetic, not for the faint of heart",
      "comments": "Extremely high maintenance, needs expert care",
      "adoptionStatus": "adopted",
      "imageUrl": "./imgs/Pets/Rascal_01.jpeg"
    },
    {
      "id": 19,
      "name": "Digger",
      "breed": "badger",
      "subType": "Hog Badger",
      "sex": "Male",
      "age": 2,
      "colour": "Dark brown with white throat",
      "temperament": "Shy and nervous, but a great cuddler once trust is built",
      "comments": "Takes time to warm up, needs patient owner",
      "adoptionStatus": "available",
      "imageUrl": "./imgs/Pets/Digger_01.jpeg"
    },
    {
      "id": 20,
      "name": "Stripey",
      "breed": "badger",
      "subType": "Ferret Badger",
      "sex": "Female",
      "age": 3,
      "colour": "Brown with facial stripes",
      "temperament": "Playful and mischievous, loves to dig and burrow",
      "comments": "Smallest badger species, still requires specialized care",
      "adoptionStatus": "pending",
      "imageUrl": "./imgs/Pets/Stripey_01.jpeg"
    }
  ],
  "adoptions": [
  {
    "id": 1,
    "name": "Sarah Johnson",
    "email": "sarah.j@example.com",
    "history": "Yes",
    "comments": "I've always loved Siamese cats and Luna seems like the perfect companion. I work from home so I can give her plenty of attention.",
    "terms": true,
    "petID": 2,
    "dateSubmitted": "2025-11-20"
  },
  {
    "id": 2,
    "name": "Michael Chen",
    "email": "m.chen@example.com",
    "history": "Yes",
    "comments": "We have a large backyard and I'm looking for a smart dog to train. Bella would be a great addition to our family.",
    "terms": true,
    "petID": 10,
    "dateSubmitted": "2025-11-22"
  },
  {
    "id": 3,
    "name": "Emma Rodriguez",
    "email": "emma.r@example.com",
    "history": "No",
    "comments": "This will be my first exotic pet. I've done extensive research on badger care and have prepared a large outdoor enclosure.",
    "terms": true,
    "petID": 20,
    "dateSubmitted": "2025-11-24"
  }
]
}