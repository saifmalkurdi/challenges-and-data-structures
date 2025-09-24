# MinStack Implementation

> A minimal implementation of a **MinStack (LIFO with getMin)** in JavaScript using a singly linked `Node`. Includes Jest tests.

[⬅ Back to Root README](../../../README.md)

---

## 🧩 Problem Domain

Implement a **Stack (Last-In, First-Out)** using linked nodes with the following operations:

- `push(value)` – add a value to the top
- `pop()` – remove and return the top value (or `null` if empty)
- `peek()` – return the top value without removing (or `null` if empty)
- `isEmpty()` – return `true` if the stack is empty, else `false`
- `getMin()` – return the **minimum** value currently in the stack (or `null` if empty)

---

## 🔢 Inputs and Expected Outputs (Examples)

```text
Input:  push(15), push(7), push(12), push(3)
Output: Top -> [3] -> [12] -> [7] -> [15] -> null
```

```text
Input:  getMin()
Output: 3
```

```text
Input:  pop()
Output: 3,  Top -> [12] -> [7] -> [15] -> null
```

```text
Input:  getMin()
Output: 7
```

```text
Input:  peek()
Output: 12
```

```text
Input:  push(2)
Output: Top -> [2] -> [12] -> [7] -> [15] -> null
```

```text
Input:  getMin()
Output: 2
```

---

## ⚠️ Edge Cases

- **Empty stack** → `pop()`, `peek()`, or `getMin()` should return `null`.
- After popping the last element → `isEmpty()` should be `true`.

---

## 👀 Visual

### MinStack (push, pop, and getMin)

```text
Initial:  Empty

push(15) → Top -> [15] -> null
push(7)  → Top -> [7]  -> [15] -> null
push(12) → Top -> [12] -> [7]  -> [15] -> null
push(3)  → Top -> [3]  -> [12] -> [7] -> [15] -> null

getMin() → 3

pop()    → returns 3
           Top -> [12] -> [7] -> [15] -> null
getMin() → 7

peek()   → 12

push(2)  → Top -> [2]  -> [12] -> [7] -> [15] -> null
getMin() → 2
```

---

## ⚙️ Algorithm (Description)

- **push(value)**

  - Create a new node.
  - Point new node’s `next` to current `top`.
  - Update `top` and size.
  - **Time:** O(1) · **Space:** O(1)

- **pop()**

  - If empty → return `null`.
  - Save `top.value`; move `top = top.next` and decrement size.
  - **Time:** O(1) · **Space:** O(1)

- **peek()**

  - Return `top?.value ?? null`.
  - **Time:** O(1)

- **isEmpty()**

  - Return `length === 0`.

- **getMin()** (basic assignment version)
  - Walk the linked list to find the minimum value each call.
  - **Time:** O(n) · **Space:** O(1)

---

## 💻 Files

> Full implementation for this challenge lives in this folder:  
> [`src/Node.js`](./src/Node.js) · [`src/MinStack.js`](./src/MinStack.js) · [`src/app.js`](./src/app.js)  
> Tests: [`tests/min-stack.test.js`](./tests/min-stack.test.js)

---

## 🧮 Big‑O Summary

| Operation | Time                                                 | Space (extra)                      |
| --------- | ---------------------------------------------------- | ---------------------------------- |
| push      | O(1)                                                 | O(1)                               |
| pop       | O(1)                                                 | O(1)                               |
| peek      | O(1)                                                 | O(1)                               |
| isEmpty   | O(1)                                                 | O(1)                               |
| getMin    | O(n) _(basic)_ / O(1) _(optional min‑stack variant)_ | O(1) _(basic)_ / O(n) _(optional)_ |

---

## ▶️ How to Run

### 1) Navigate to this folder

```bash
cd "Data Structures/Stack-Queue/MinStack"
```

### 2) Run the demo

```bash
node src/app.js
```

🖥️ Example Output:
![Console Output](./docs/minstack-console-output.png)

### 3) Run tests (Jest)

```bash
npm install
npm test
```

Or run just this test file:

```bash
npm test min-stack.test.js
```

✅ Test Results:

![MinStack Test](./docs/minstack-test.png)
