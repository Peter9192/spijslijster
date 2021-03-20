from pathlib import Path
import json
from ruamel.yaml import YAML
yaml=YAML(typ='safe')

recipefiles = Path('./source').glob('*.yml')
recipes = [yaml.load(recipe) for recipe in recipefiles]
for id, recipe in enumerate(recipes):
    recipe['id'] = f"{str(id).zfill(3)}"
    
with open('recipes.json', 'w') as outfile:
    json.dump(recipes, outfile, sort_keys=True, ensure_ascii=False) # use indent=4 for pretty printing