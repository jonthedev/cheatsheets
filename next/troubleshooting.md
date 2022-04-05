# TROUBLESHOOTING

---

## Parsing error : Cannot find module 'next/babel'

1. Add the following to the **.eslintrc.json**

```json
{
  "extends": ["next/babel", "next/core-web-vitals"]
}
```
