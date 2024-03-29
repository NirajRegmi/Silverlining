from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in silverlining/__init__.py
from silverlining import __version__ as version

setup(
	name="silverlining",
	version=version,
	description="Sliverlining",
	author="Dexciss",
	author_email="abc@mail.com",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
