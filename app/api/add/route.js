import clientPromise from "@/lib/mongodb";



export async function POST(request) {
  const body = await request.json()

  const clint = await clientPromise
  const db = clint.db('linktree')
  const collection = db.collection('links')

  // Check if the user already exists
  const user = await collection.findOne({ handle: body.handle })
  if (user) {
    return Response.json({ success: false, error: true, message: "Handle already exists", result: null })
    
  }

  const result = await collection.insertOne(body)

  return Response.json({ success: true, message: 'Link is added', error: false, result: result })

}