import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Settings = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold text-foreground">Настройки</h1>
        <p className="text-muted-foreground mt-1">Управляйте параметрами вашего контент-завода</p>
      </div>

      <Tabs defaultValue="general" className="space-y-4">
        <TabsList>
          <TabsTrigger value="general">Общие</TabsTrigger>
          <TabsTrigger value="notifications">Уведомления</TabsTrigger>
          <TabsTrigger value="team">Команда</TabsTrigger>
          <TabsTrigger value="billing">Тариф</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Профиль</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="User" className="h-10 w-10 text-primary" />
                </div>
                <Button variant="outline">Изменить фото</Button>
              </div>
              <Separator />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Имя</Label>
                  <Input id="name" defaultValue="Иван Петров" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue="ivan@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Компания</Label>
                <Input id="company" defaultValue="Моя компания" />
              </div>
              <Button>Сохранить изменения</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Настройки публикаций</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Автоматическая публикация</Label>
                  <p className="text-sm text-muted-foreground">
                    Публиковать контент автоматически по расписанию
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Предпросмотр перед публикацией</Label>
                  <p className="text-sm text-muted-foreground">
                    Показывать предпросмотр перед каждой публикацией
                  </p>
                </div>
                <Switch />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Оптимизация изображений</Label>
                  <p className="text-sm text-muted-foreground">
                    Автоматически сжимать изображения перед публикацией
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Email уведомления</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Новые публикации</Label>
                  <p className="text-sm text-muted-foreground">
                    Получать уведомления о новых публикациях
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Еженедельная статистика</Label>
                  <p className="text-sm text-muted-foreground">
                    Еженедельный отчет об эффективности контента
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Ошибки публикации</Label>
                  <p className="text-sm text-muted-foreground">
                    Уведомления о проблемах с публикацией
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Push уведомления</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Напоминания о планировании</Label>
                  <p className="text-sm text-muted-foreground">
                    Напоминания о незаполненных слотах в расписании
                  </p>
                </div>
                <Switch />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Успешные публикации</Label>
                  <p className="text-sm text-muted-foreground">
                    Уведомления об успешно опубликованном контенте
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="team" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Участники команды</CardTitle>
                <Button>
                  <Icon name="Plus" className="h-4 w-4 mr-2" />
                  Пригласить
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: "Иван Петров", email: "ivan@example.com", role: "Владелец" },
                  { name: "Мария Сидорова", email: "maria@example.com", role: "Редактор" },
                  { name: "Алексей Иванов", email: "alexey@example.com", role: "Автор" },
                ].map((member, i) => (
                  <div key={i} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon name="User" className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">{member.name}</p>
                        <p className="text-sm text-muted-foreground">{member.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-muted-foreground">{member.role}</span>
                      <Button variant="ghost" size="icon">
                        <Icon name="MoreVertical" className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Роли и права доступа</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div>
                  <p className="font-medium mb-1">Владелец</p>
                  <p className="text-sm text-muted-foreground">Полный доступ ко всем функциям</p>
                </div>
                <Separator />
                <div>
                  <p className="font-medium mb-1">Редактор</p>
                  <p className="text-sm text-muted-foreground">
                    Создание, редактирование и публикация контента
                  </p>
                </div>
                <Separator />
                <div>
                  <p className="font-medium mb-1">Автор</p>
                  <p className="text-sm text-muted-foreground">
                    Создание и редактирование черновиков
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="billing" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Текущий тариф</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-2xl font-bold mb-2">Профессиональный</p>
                  <p className="text-muted-foreground">
                    Безлимитные публикации и аналитика
                  </p>
                </div>
                <Button variant="outline">Изменить тариф</Button>
              </div>
              <Separator className="my-4" />
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Следующий платеж</span>
                  <span className="font-medium">15 февраля 2024</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Сумма</span>
                  <span className="font-medium">2,990 ₽/месяц</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>История платежей</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { date: "15 янв 2024", amount: "2,990 ₽", status: "Оплачено" },
                  { date: "15 дек 2023", amount: "2,990 ₽", status: "Оплачено" },
                  { date: "15 ноя 2023", amount: "2,990 ₽", status: "Оплачено" },
                ].map((payment, i) => (
                  <div key={i} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">{payment.date}</p>
                      <p className="text-sm text-muted-foreground">{payment.status}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-medium">{payment.amount}</span>
                      <Button variant="ghost" size="icon">
                        <Icon name="Download" className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;
