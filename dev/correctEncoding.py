import os

for i in os.listdir("../privateTemplates"):
    try:
        with open("../privateTemplates/" + i, "r") as f:
            content = f.read()
        with open("../privateTemplates/" + i, "w", encoding="utf-8") as f:
            f.write(content)
        print(f"Processed {i} to ensure UTF-8 encoding.")
        # break # test 
    except:
        print(f"Failed to process {i}.")

input("Finish...")