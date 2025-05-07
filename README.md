# 💡 TypeScript Interview Blog

এই ব্লগে আলোচনা করব TypeScript-এর দুটি গুরুত্বপূর্ণ বিষয় নিয়ে:

1️⃣ What are some differences between interfaces and types in TypeScript?  
2️⃣ What is type inference in TypeScript? Why is it helpful?

---

## 1️⃣ Interface vs Type Alias: পার্থক্য কী?

TypeScript-এ `interface` এবং `type` প্রায় একই উদ্দেশ্যে ব্যবহৃত হয়—কোনো ডেটার গঠন বা টাইপ নির্ধারণ করতে। কিন্তু এদের মধ্যে কিছু গুরুত্বপূর্ণ পার্থক্য আছে।

### 🔍 `interface` বনাম `type` – মূল পার্থক্যগুলো

| ⚙️ বৈশিষ্ট্য            | `interface`                                              | `type` (Type Alias)                                         |
|-------------------------|----------------------------------------------------------|-------------------------------------------------------------|
| 🔁 পুনরায় ঘোষণা         | হ্যাঁ, একাধিকবার ঘোষণা করলে স্বয়ংক্রিয়ভাবে merge হয়     | না, একাধিকবার ঘোষণা করলে **error** দেয়                    |
| 🔗 Extension             | `extends` এবং `implements` ব্যবহার করে প্রসারিত করা যায় | intersection (`&`) দিয়ে মিলিয়ে ব্যবহার করা যায়             |
| 🧱 ব্যবহারের ক্ষেত্র     | সাধারণত object structure এর জন্য ভালো                   | complex types (union, intersection) এ বেশি উপযোগী          |
| ⚡ পারফর্মেন্স           | কিছু ক্ষেত্রে বেশি optimized                             | তুলনামূলকভাবে কম optimized                                |
| 🔄 Declaration Merging  | সমর্থিত     

### ✅ কখন কোনটা ব্যবহার করব?

- শুধুমাত্র object টাইপ তৈরি করতে চাইলে → `interface`
- যদি union/intersection বা function/type alias দরকার হয় → `type`

### 🧪 উদাহরণ:

```ts
// Interface
interface User {
  name: string;
  age: number;
}

interface Admin extends User {
  role: string;
}

// Type
type Animal = {
  species: string;
  age: number;
};

type Dog = Animal & {
  breed: string;
};
2️⃣ Type Inference in TypeScript: কী এবং কেন দরকারি?
🧠 Type Inference মানে কী?
TypeScript নিজে থেকে variable, parameter বা return value দেখে টাইপ আন্দাজ করে নেয়, যখন তুমি স্পষ্টভাবে টাইপ দাও না।


let name = "Ersa"; // TypeScript বুঝে নিচ্ছে এটা string টাইপ
let age = 20;      // inferred as number
✅ এটা কেন দরকারি?
টাইপ না লিখেও নিরাপদ কোড লেখা যায়

কোড ছোট ও পরিষ্কার থাকে

নতুন ডেভেলপারদের জন্য কোড লেখা সহজ হয়

টাইপ নিরাপত্তা নিশ্চিত করে

🧪 উদাহরণ:


function multiply(a: number, b: number) {
  return a * b; // TypeScript বুঝে নেয় এটা number return করছে
}
⚠️ কখন টাইপ স্পষ্টভাবে দেওয়া ভালো?
যখন ভ্যালু null, undefined বা dynamic

যখন ফাংশনের রিটার্ন টাইপ complex

যখন API বা লাইব্রেরি তৈরি করছো

let result: number; // টাইপ না দিলে এটা 'any' হয়ে যাবে
✨ উপসংহার
interface এবং type—দুটোই শক্তিশালী, তবে ব্যবহারের জায়গা বুঝে ব্যবহার করাই বুদ্ধিমানের কাজ।

type inference আমাদের টাইপ নির্ধারণের ঝামেলা কমায় এবং কোডকে করে আরও স্মার্ট ও নিরাপদ।


✒️ লেখক: [শরিফা]
