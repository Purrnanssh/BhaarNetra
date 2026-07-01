import re

with open("app/globals.css", "r") as f:
    css = f.read()

# We want to remove the specific truck coloring blocks and insert a global block at the bottom.
# Instead of regex which might fail, we will use literal replacement for the known blocks,
# or a targeted regex that replaces the specific sections safely.

# Let's just append the global truck rule to the end of the file.
# And we can use regex to remove any existing `.truck-body`, `.truck-window` etc. rules.

# Match a CSS rule that contains a selector with `.truck-`
# It matches: selectors (can include commas and newlines) { properties }
pattern = r"(?m)^[^{}]*\.truck-[a-z]+[^{}]*\{[^}]*\}"

# Remove them all
cleaned_css = re.sub(pattern, "", css)

# Add the new universal truck styles
universal_truck_css = """
/* UNIVERSAL TRUCK STYLES */
.truck-body {
  fill: #6B7280;
  stroke: #4B5563;
}
.truck-window {
  fill: #4B5563;
}
.truck-line,
.truck-load {
  stroke: #9CA3AF;
  stroke-width: 1.5;
}
.truck-overload {
  stroke: #374151;
  stroke-width: 2;
}
.truck-wheel {
  fill: #374151;
  stroke: #4B5563;
}
.truck-hub {
  fill: #9CA3AF;
}
"""

with open("app/globals.css", "w") as f:
    f.write(cleaned_css + "\n" + universal_truck_css)

print("Updated globals.css")
