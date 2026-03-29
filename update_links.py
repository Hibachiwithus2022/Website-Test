import re, os

def slugify(s):
    s = s.lower().strip()
    s = re.sub(r"['\u2019]", '', s)
    s = re.sub(r'[^a-z0-9]+', '-', s)
    return s.strip('-')

with open('locations.html', 'r', encoding='utf-8') as f:
    html = f.read()

# 1. Replace city card hrefs: <a href="index.html#book" class="city-card"><div class="city-name">CITY</div>
def replace_city(m):
    city = m.group(1)
    slug = slugify(city)
    return '<a href="cities/' + slug + '.html" class="city-card"><div class="city-name">' + city + '</div>'

html = re.sub(
    r'<a href="index\.html#book" class="city-card"><div class="city-name">([^<]+)</div>',
    replace_city,
    html
)

# 2. Replace state names with clickable links inside state-header divs
def replace_state(m):
    state = m.group(1)
    slug = slugify(state)
    return '<div class="state-name"><a href="states/' + slug + '.html" style="color:inherit;text-decoration:none;border-bottom:2px solid #C8102E;padding-bottom:1px;">' + state + '</a></div>'

html = re.sub(
    r'<div class="state-name">([^<]+)</div>',
    replace_state,
    html
)

with open('locations.html', 'w', encoding='utf-8') as f:
    f.write(html)

# Count replacements done
city_count = len(re.findall(r'href="cities/', html))
state_count = len(re.findall(r'href="states/', html))
print(f"Updated {city_count} city links and {state_count} state links")
