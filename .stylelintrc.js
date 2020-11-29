module.exports = {
  "rules": {
    "declaration-colon-newline-after": null,
    "value-list-comma-newline-after": null,
    "no-descending-specificity": null,
    "at-rule-empty-line-before": null,
    "no-empty-source": null,
    "max-empty-lines": 6,
    "at-rule-no-unknown": [
      true,
      {
        "ignoreAtRules": [
          "extend",
          "at-root",
          "debug",
          "warn",
          "error",
          "if",
          "else",
          "for",
          "each",
          "while",
          "mixin",
          "include",
          "content",
          "return",
          "tailwind",
          "apply",
          "responsive",
          "variants",
          "screen",
          "function"
        ]
      }
    ]
  }
};
