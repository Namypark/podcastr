import { v } from "convex/values";
import { mutation } from "./_generated/server";

/**
 * We'll use 2 mutations: The first one generates an upload URL,
 * the second one saves the file storage ID in our database.
 */
export const generateUploadUrl = mutation({
  args: {
    // ...
  },
  handler: async (ctx, args) => {
    // use `args` and/or `ctx.auth` to authorize the user
    // ...

    // Return an upload URL
    return await ctx.storage.generateUploadUrl();
  },
});

// export const saveStorageId = mutation({
//   // You can customize these as you like
//   args: {
//     audioStorageId: v.optional(v.id("_storage")),
//     // other args...
//   },
//   handler: async (ctx, args) => {
//     // use `args` and/or `ctx.auth` to authorize the user
//     // ...

//     // Save the storageId to the database using `insert`
//     ctx.db.insert("podcasts", {
//       audioStorageId: args.audioStorageId,
//       // ...
//     });
//     // or `patch`/`replace`
//     ctx.db.patch(someId, {
//       audioStorageId: args.storageId,
//       // ...
//     });
//   },
// });
