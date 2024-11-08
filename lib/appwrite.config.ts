import * as sdk from 'node-appwrite'; // Import the entire Appwrite SDK as 'sdk'.

// Destructure environment variables for easy access and use throughout the application.
export const {
    PROJECT_ID,
    API_KEY,
    DATABASE_ID,
    PATIENT_COLLECTION_ID,
    DOCTOR_COLLECTION_ID,
    APPOINTMENT_COLLECTION_ID,
    NEXT_PUBLIC_BUCKET_ID: BUCKET_ID, // Renaming environment variable for use in the code.
    NEXT_PUBLIC_ENDPOINT: ENDPOINT
} = process.env;

// Initialize a new Appwrite client instance.
const client = new sdk.Client();

// Configure the Appwrite client with the required project ID and API key.
// The exclamation mark (!) is used to assert that these values are not null or undefined.
client
        .setProject(process.env.PROJECT_ID!)
        .setKey(process.env.API_KEY!);

// Create instances of Appwrite services using the configured client.
export const databases = new sdk.Databases(client); // For interacting with Appwrite databases.
export const storage = new sdk.Storage(client); // For managing file storage.
export const messaging = new sdk.Messaging(client); // For handling messaging services.
export const users = new sdk.Users(client); // For managing user accounts.
        
// The following line is commented out; it sets the endpoint for the Appwrite client.
// Uncomment and set the endpoint if needed.
 // .setEndpoint(ENDPOINT!)
 