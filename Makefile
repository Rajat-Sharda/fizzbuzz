build:
	docker build -t fizz .

run:
	docker run -d -p 8080:8080 fizz