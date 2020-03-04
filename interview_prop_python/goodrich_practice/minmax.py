def minmax(arr):
  min = arr[0]
  max = arr[0]

  for i in arr:
    if i < min:
      min = i
    elif i > max:
      max = i
    else:
      continue

  print((min, max))
  

print(minmax([1, 9, 0, -1, 15]))