// import { getDownloadURL, ref, getStorage } from 'firebase/storage'
// import { getAuth, updateProfile, User } from 'firebase/auth'

// const storage = getStorage()
// const profileRef = ref(
//   storage,
//   `gs://${storage.app.options.storageBucket}/test/profile.png`
// )

// getDownloadURL(profileRef)
//   .then((result) => {
//     // console.log(result)
//     updateProfile(getAuth().currentUser as User, {
//       photoURL: result
//     })
//   })
//   .catch((error) => {
//     console.log(error)
//   })
