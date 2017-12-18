from locust import HttpLocust, TaskSet, task



class MyTaskSet(TaskSet):
    @task
    def index(self):
        self.client.get("/")

    @task
    def login(self):
        self.client.post("/login/")

    @task
    def profile(self):
        self.client.get("/profile/")


class LocustTest(HttpLocust):
  task_set = MyTaskSet
  host = "http://localhost:8080"
  min_wait = 1000
  max_wait = 1000
